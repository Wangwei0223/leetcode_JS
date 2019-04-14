/**
 * 其实可以直接return N % 2 === 0
 * 因为N为奇数, Alice先选, 肯定是奇数, 因为只有奇数 % 奇数 === 0. 
 * 奇数 - 奇数之后又是偶数, Bob选个1, 又给Alice奇数, 最后一定是Bob拿到2.
 * 2必胜, 所以N为偶数必胜
 */

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function(N) {
    let win = 0;
    while(N > 1){
        for(let x = 1; x < N; x++){
            if(N % x === 0){
                win++;
                N = N - x;
                break;
            }else{
                if(win % 2 !== 0) return true;
                return false;
            }
        }
    }
    return win % 2 !== 0;
};