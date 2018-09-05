function multiply(array) {
    let C = [], D = [], n = array.length;
    C[0] = array[0];

    for (let i = 1; i < n; i++) {
        C[i] = array[i] * C[i - 1];
    }

    D[n - 1] = array[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        D[i] = array[i] * D[i + 1];
    }
    
    let B = [];
    B[0] = D[1];
    B[n - 1] = C[n - 2];
    for (let i = 1; i < n - 1; i++) {
        B[i] = C[i - 1] * D[i + 1];
    }
    return B;
}