/**
 * 1029. Two City Scheduling
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort(function(a, b){
        return a[0] - a[1] - (b[0] - b[1]);
    });
    let num = costs.length / 2, res = 0
    for (let i = 0; i < num; i++){
        res += costs[i][0] + costs[i + num][1];
    }
    return res;
};

