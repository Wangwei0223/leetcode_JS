/**
 * 1037. Valid Boomerang
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let pointset = new Set();
    for(let i of points){
        if(pointset.has('' + i)){
            return false;
        }
        pointset.add('' + i);
    }
    
    let k1  = parseFloat ((points[1][1] - points[0][1]) /  (points[1][0] - points[0][0]));
    
    let k2  = parseFloat ((points[2][1] - points[1][1]) /  (points[2][0] - points[1][0]));
    
    return k1 !== k2;
};