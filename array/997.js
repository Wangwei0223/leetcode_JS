/**
 * 997. Find the Town Judge
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
    if(N === 1 && trust.length === 0) return 1; // only judge
    
    if (N === 0 || trust.length === 0) return -1;

    let hashmap = new Map();
    for (let i = 0; i < trust.length; i++) {
        if (!hashmap.has(trust[i][1])) {
            hashmap.set(trust[i][1], [trust[i][0]]);
        } else {
            hashmap.get(trust[i][1]).push(trust[i][0]);
        }
    }


    let res = -1;
    let cur = [];

    for (let value of hashmap.values()) {
        cur = cur.concat(value);
    }

    for (let [key, value] of hashmap.entries()) {
        if (value.length === N - 1) { // everyone trust judge
            if (cur.indexOf(key) === -1) { // judge does trust anyone
                res = key;
            }
        }
    }

    return res;
};