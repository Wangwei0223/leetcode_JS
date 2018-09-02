var stack_1 = [];
var stack_2 = [];
/**
 * 
用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
 * @param {*} node 
 */
function push(node)
{
    // write code here
    stack_1.push(node);
    return stack_1.length;
}
function pop()
{
    // write code here
    return stack_1.shift();
}