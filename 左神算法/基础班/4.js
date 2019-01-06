// 猫狗队列

class Pet {
    constructor(type) {
        this.count = 0;
        this.type = type;
    }

    log() {
        // console.log(this.count);
        return this;
    }
}

class Cat extends Pet {
    // constructor 没东西可以省 自动加上super()
    // super作为对象时，在普通方法中，指向父类的原型对象；
    add(num) {
        this.count += num;
        return this;
    }

}

class Dog extends Pet {
    // 另一个需要注意的地方是，在子类的构造函数中，只有调用super之后，才可以使用this关键字，否则会报错
    add(num) {
        this.count += num;
        return this;
    }
}

let cat = new Cat('cat');
let dog = new Dog('dog');

cat.add(5).log().add(4).log();
dog.add(3).log().add(2).log();

class Queue {
    constructor() {
        this.queue = [];
        this.cat = [];
        this.dog = [];
    }

    add(obj) {
        let obj_ = {
            timestamp: +new Date(),
            pet: obj
        }
        this.queue.push(obj);
        if (obj.type === 'cat') this.cat.push(obj);
        if (obj.type === 'dog') this.dog.push(obj);
        return this;
    }

    pollAll() { // 最早进来的猫和狗
        return [this.cat.shift(), this.dog.shift()];
    }

    pollCat() { // 最早进入的猫
        return this.cat.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    isCatEmpty() {

    }
}

let queue = new Queue();

console.log(queue.isEmpty());
queue.add(cat).add(dog).add(cat).add(dog);
console.log(queue.isEmpty());
console.log(queue.pollAll());
console.log(queue.pollCat());

// 转圈打印矩阵
class spiralOrderPrint {
    constructor(arr) {
        this.matrix = arr.slice();
        this.tR = 0;
        this.tC = 0;
        this.dR = arr.length - 1;
        this.dC = arr[0].length - 1;
    }

    print() {
        while (this.tR <= this.dR && this.tC <= this.dC) {
            this.printEdge(this.matrix, this.tR++, this.tC++, this.dR--, this.dC--);
        }
    }
    /**
     * 打印一圈
     */
    printEdge(matrix, tR, tC, dR, dC) {
        if (tR === dR) { // 左上角和右下角在同一行
            for (let i = tC; i <= dC; i++) {
                console.log(matrix[tR][i]);
            }
        } else if (tC === dC) { // 同一列
            for (let i = tR; i <= dR; i++) {
                console.log(matrix[i][tC]);
            }
        } else {
            let curC = tC;
            let curR = tR;
            while (curC !== dC) {
                console.log(matrix[tR][curC++])
            }
            while (curR !== dR) {
                console.log(matrix[curR++][dC]);
            }
            while (curC !== tC) {
                console.log(matrix[dR][curC--]);
            }
            while (curR !== tR) {
                console.log(matrix[curR--][tC]);
            }
        }
    }
}
let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
let spiral = new spiralOrderPrint(arr);

spiral.print();

/**
 * 旋转正方形
 */
class rotateSquare {
    constructor(arr) {
        this.matrix = arr.slice();
        this.tr = 0;
        this.tc = 0;
        this.dr = arr.length - 1;
        this.dc = arr[0].length - 1;
    }

    rotate() {
        // 判断tr, dr就够了, 因为是正方形
        while (this.tr < this.dr) {
            this.rotateEdge(this.matrix, this.tr++, this.dr--, this.tc++, this.dc--)
        }
        return this.matrix;
    }

    /**
     * 
     * 1,  2,   3,  4
     * 5,  6,   7,  8
     * 9,  10,  11, 12
     * 13, 14,  15, 16
     */

    rotateEdge(matrix, tr, dr, tc, dc) {
        let times = dc - tc;
        let tmp;
        for(let i = 0; i < times; i++){
            tmp = matrix[tr][tc + i];
            matrix[tr][tc + i] = matrix[dr - i][tc];
            matrix[dr - i][tc] = matrix[dr][dc - i];
            matrix[dr][dc - i] = matrix[tr + i][dc];
            matrix[tr + i][dc] = tmp;
        }
    }
}

let rotate = new rotateSquare(arr);
console.log(rotate.rotate());
