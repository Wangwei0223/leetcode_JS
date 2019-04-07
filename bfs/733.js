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
    
    //dfs(image, sr, sc, visit, newColor);
    
    image = bfs(image, sr, sc, visit, newColor);
    
    return image;
};

// BFS
var bfs = function(image, sr, sc, visit, newColor){
    let queue = [[sr, sc]], cur, dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while(queue.length > 0){
        cur = queue.shift();
        visit[cur[0]][cur[1]] = true;
        for(let i of dirs){
            let nr = cur[0] + i[0], nc = cur[1] + i[1];
            if(nr < 0 || nc < 0 || nr >= image.length || nc >= image[0].length || image[nr][nc] !== image[cur[0]][cur[1]] || visit[nr][nc]){
                continue;   
            }
            queue.push([nr, nc]);
        }
        image[cur[0]][cur[1]] = newColor;
    }
    
    return image;
}