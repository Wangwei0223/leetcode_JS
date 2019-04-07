/**
 * 733. Flood Fill
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    let visit = new Array(image.length).fill([]);
    for(let i = 0; i < visit.length; i++){
        visit[i] = new Array(image[0].length).fill(false);
    }
    
    dfs(image, sr, sc, visit, newColor);

    return image;
};


// DFS
var dfs = function(image, sr, sc, visit, newColor){
    visit[sr][sc] = true;
    let dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    for(let i of dirs){
        let nr = sr + i[0], nc = sc + i[1];
        if(nr < 0 || nc < 0 || nr >= image.length || nc >= image[0].length || image[nr][nc] !== image[sr][sc] || visit[nr][nc]) continue;
        dfs(image, nr, nc, visit, newColor);
    }
    image[sr][sc] = newColor;
}