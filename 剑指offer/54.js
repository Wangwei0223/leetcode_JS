/**
 * 字符流中第一个不重复的数字
 */

//Init module if you need
let map;
function Init()
{
    // write code here
    map = {};
}
//Insert one char from stringstream
function Insert(ch)
{
    // write code here
    if(!map[ch]){
        map[ch] = 1;
    }else{
        map[ch]+=1;
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // write code here
    for(let i in map){
        if(map.hasOwnProperty(i)){
            if(map[i] === 1){
                return i;
            }
        }
    }
    return '#';
}