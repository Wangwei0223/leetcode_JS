/**
 * 1041. Robot Bounded In Circle
 * @param {string} instructions
 * @return {boolean}
 */

let obj = {
    'left': [-1, 0],
    'right': [1, 0],
    'up': [0, 1],
    'down': [0, -1]
}

var isRobotBounded = function(instructions) {
    let pre = 'up', init = [0, 0];
    for(let j = 0; j < 4; j++){
        for(let i = 0; i < instructions.length; i++){
            let dir = obj[pre];
            if(instructions[i] === 'G'){
                init[0] += dir[0];
                init[1] += dir[1];
            }else{
                pre = getDir(pre, instructions[i]);
            }
        }
        if(init[0] === 0 && init[1] === 0){
            return true;
        }
    }
    
    return instructions.indexOf('G') === -1;
};

let getDir = function(pre, dir){
    if(pre === 'up'){
        if(dir === 'L'){
            return 'left';
        }else{
            return 'right';
        }
    }else if(pre === 'down'){
        if(dir === 'L'){
            return 'right';
        }else{
            return 'left';
        }
    }else if(pre === 'left'){
        if(dir === 'L'){
            return 'down';
        }else{
            return 'up';
        }
    }else if(pre === 'right'){
        if(dir === 'L'){
            return 'up';
        }else{
            return 'down';
        }
    }
}