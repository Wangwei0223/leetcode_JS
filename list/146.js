class NodeList{
    contructor(capacity){
        this.head = null;
        this.tail = null;
    }
    
    remove(){
        this.head = this.head.next;
        this.head.last.next = null;
        this.head.last = null;
    }
    
    add(node){
        if(!this.head){
            this.head = node;
            this.tail = node;
            return;
        }
        node.last = this.tail;
        this.tail.next = node;
        this.tail = node;
    }
    
    move(node){
        if(node === this.tail) return;
        if(node === this.head){ // 记得动head!!
            node.next.last = null;
            this.head = node.next;
            node.last = this.tail;
            this.tail.next = node;
            node.next = null;
            this.tail = node;
            return;
        }
        node.last.next = node.next; // 是head的时候node.last.next没有, 会报错!!
        node.next.last = node.last;
        node.last = this.tail;
        this.tail.next = node;
        node.next = null;
        this.tail = node;
    }
    
    returnHead(){
        return this.head;
    }
}

// A <-> B <-> C <-> D

class Node{
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.last = null;
        this.next = null;
    }
}

class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.KtoV = new Map();
        this.VtoK = new Map();
        this.nodeList = new NodeList(capacity);
    }
    
    put(key, val){
        if(this.KtoV.has(key)){
            let node = this.KtoV.get(key);
            node.val = val;
            this.nodeList.move(node); // 更新key的value时也要move到后面
            return;
        }
        let node = new Node(key, val);
        this.KtoV.set(key, node);
        this.VtoK.set(node, key);
        this.nodeList.add(node);
        this.capacity--;
        if(this.capacity < 0){
            let curHead = this.nodeList.returnHead();
            this.KtoV.delete(this.VtoK.get(curHead));
            this.VtoK.delete(curHead);
            this.capacity++;
            this.nodeList.remove();
        }
    }
    
    get(key){
        if(!this.KtoV.has(key)) return -1;
        let node = this.KtoV.get(key);
        this.nodeList.move(node);
        return node.val;
    }
}