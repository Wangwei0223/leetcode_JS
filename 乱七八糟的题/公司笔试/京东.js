var n = 3;
var arr = '1 2 3'.split(' ');

for(let i = 0; i < arr.length; i++){
    arr[i] = +arr[i];
}

arr.sort(function(a, b){
	return a - b;
});

console.log(arr);

var res;

if(n % 2 === 0){
	res = (arr[Math.floor(n / 2) - 1] + arr[Math.floor(n / 2)]) / 2;
}else{
	res = arr[Math.floor(n / 2)];
}

console.log(res);