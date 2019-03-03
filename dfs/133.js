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

//DFS
var cloneGraph = function(node){
    if(!node) return null;
    let hashmap = new Map();
    return dfs(node, hashmap);
}

var dfs = function(root, hashmap){
    if(hashmap.has(root)) return hashmap.get(root);
    hashmap.set(root, new Node(root.val, []));
    for(let i of root.neighbors){
        hashmap.get(root).neighbors.push(dfs(i, hashmap));
    }
    return hashmap.get(root);
}