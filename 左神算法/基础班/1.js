// A有序 B无序 打印B中所有不在A的数

var A = [1, 2, 3, 4, 5, 6, 7, 8];
var B = [6, 2, 6, 8, 9, 10, 12, 0];

/**
 * 直接indexOf
 * @param {*} a 
 * @param {*} b 
 */
function printExclude(a, b) { 
    for(let i = 0; i < b.length; i++){
        if (a.indexOf(b[i]) === -1){ // indexOf复杂度 ?
            console.log(b[i]);
        }
    }
}

printExclude(A, B);

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
function printExclude_(a, b){

}