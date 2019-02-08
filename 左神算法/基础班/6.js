/**
 * Hash函数和Hash表
 * 设计randomPool结构
 * insertKey deleteKey getRandom 做到不重复加入, 时间复杂度都是O(1)
 * 思路: 准备两张HashMap 1个存index, value, 一个存value, index
 * */
class randomPool{
    constructor(){
        this.hashMap1 = new Map();
        this.hashMap2 = new Map();
        this.index = 0;
    }

    insertKey(key){
        this.hashMap1.set(key, this.index);
        this.hashMap2.set(this.index, key);
        this.index++;
    }

    deleteKey(key){
        // 删掉某一个index, 就会有空出的部分, 用最后一个补上
        let idx = this.hashMap1.get(key); // 得到要删除的index
        let val = this.hashMap2.get(this.index); // 得到末尾的数值
        this.hashMap2.set(idx, val);
        this.hashMap2.delete(this.index);
        this.hashMap1.delete(key);
        this.hashMap1.set(val, idx);
        this.index--;
    }

    getRandom(){
        if(this.index === 0) return null;
        // Math.random [0.0, 1.0) 浮点数
        let idx = parseInt(Math.random()*this.index);
        return this.hashMap2.get(idx);
    }
}

// 布隆过滤器

// 一致性哈希