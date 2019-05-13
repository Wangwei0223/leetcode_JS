/**
 * 1042. Flower Planting With No Adjacent
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    let arr = new Array(N);
    let m = new Map();
    let p = new Map();
    arr[0] = 1;
    for(let i = 1; i <= N; i++){
        m.set(i, []);
        p.set(i, [1, 2, 3, 4]);
    }
    
    for(let i of paths){
        m.get(i[0]).push(i[1]);
        m.get(i[1]).push(i[0]);
    }
    
    for(let i = 1; i <= N ;i++){
        arr[i - 1] = p.get(i)[0]; // i 应该涂的颜色
        let adj = m.get(i); // 与 i 相邻
        
        for(let j of adj){
            let idx = p.get(j).indexOf(arr[i - 1]); // 相邻的点不能涂 i 应该涂过的颜色了
            p.get(j).splice(idx, 1);
        }
    }
    
    return arr;
};