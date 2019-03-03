/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * 133. Clone Graph
 * @param {Node} node
 * @return {Node}
 */

//BFS 这种方法和138很像, 4-2.js
var cloneGraph = function(node) {
    if(!node) return null;
    let queue = [node], hashmap = new Map(), cur = null;
    hashmap.set(node, new Node(node.val, []));
    while(queue.length > 0){
        cur = queue.shift();
        for(let i of cur.neighbors){
            if(!hashmap.has(i)){
                hashmap.set(i, new Node(i.val, []));
                queue.push(i);
            }
            hashmap.get(cur).neighbors.push(hashmap.get(i));
        }
        
    }
    
    return hashmap.get(node);
};