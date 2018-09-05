function movingCount(threshold, rows, cols) {
    // write code here
    let visited = [];
    for (let i = 0; i < rows; i++) {
        visited.push([]);
        for (let j = 0; j < cols; j++) {
            visited[i][j] = false;
        }
    }
    return helper(0, 0, rows, cols, visited, threshold);
}

function helper(m, n, rows, cols, visited, threshold) {
    if (m < 0 || m === rows || n < 0 || n === cols || visited[m][n]) {
        return 0;
    }
    var i = m, j = n;
    if (m >= 10) {
        i = m / 10 + m % 10;
    }
    if (n >= 10) {
        j = n / 10 + n % 10;
    }
    if (i + j > threshold) {
        return 0;
    }
    visited[m][n] = true;

    return 1 + helper(m + 1, n, rows, cols, visited, threshold)
        + helper(m, n + 1, rows, cols, visited, threshold)
        + helper(m - 1, n, rows, cols, visited, threshold)
        + helper(m, n - 1, rows, cols, visited, threshold);
}

console.log(movingCount(8, 3, 7));