var largestSumAfterKNegations = function (A, K) {
    for (let i = 0; i < K; i++) {
        A.sort(function (a, b) {
            return a - b;
        });
        A[0] = -A[0];
        console.log(A);
    }

    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
    }

    console.log(sum);
    return sum;
};


// largestSumAfterKNegations([4, 2, 3], 1);

console.log(parseInt(90 / 8));

console.log(1 % 4);

var op = function (num) {
    let cur = num % 4;
    let res;
    switch (cur) {
        case 0:
            res = '*';
            break;
        case 1:
            res = '/';
            break;
        case 2:
            res = '+';
            break;
        case 3:
            res = '-';
            break;
    }

    return res;
}

console.log(op(3));

console.log(parseInt(10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1));