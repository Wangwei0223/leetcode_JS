/**
 * 1033. Moving Stones Until Consecutive
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    let arr = [a, b, c];
    if(check(arr)) return [0, 0];
    let gap1 = arr[1] - arr[0], gap2 = arr[2] - arr[1];
    if(gap2 === 1 || gap1 === 1){
        let cur = gap2 === 1 ? gap1 : gap2;
        return [1, cur - 1];
    }

    if(gap2 === 2 || gap1 === 2){
        return [1, gap1 - 1 + gap2 - 1];
    }

    return [2, gap1 - 1 + gap2 - 1];
};


var check = function(arr){
    let cur = arr;
    cur.sort(function(a, b){
        return a - b;
    });
    
    if(cur[0] + 1 === cur[1] && cur[1] + 1 === cur[2]) return true;
    return false;
}


console.log(numMovesStones(1, 3, 5));