let s = '1!2!3';

let arr = s.split('!');

console.log(arr);

let arr1 = arr.map(function(v){
    return parseInt(v);
})

console.log(arr1);

let a = 'abc';
console.log(a.split(''));

let c = new Map();
c.set('a', 12);
console.log(c.get('a'));
c.delete('a');
console.log(c.has('a'));