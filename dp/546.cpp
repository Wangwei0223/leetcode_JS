class Solution {
public:
    int removeBoxes(vector<int>& boxes) {
        int d[100][100][100] = {0};
        return dfs(boxes, d, 0, boxes.size() - 1, 0);
    }
    
    int dfs(vector<int>& boxes, int d[100][100][100], int l, int r, int k){
        // 1, 2, 3....1, 3, 3, 3
        if(l > r) return 0;
        if(d[l][r][k]) return d[l][r][k];
        // case 1 把末尾全部3移除
        while(r > l && boxes[r] == boxes[r - 1]){
            k++;
            r--;
        }
        d[l][r][k] = (k + 1)*(k + 1) + dfs(boxes, d, l, r - 1, 0);
        // case 2 把第三个3和最后连起来
        for(int i = l; i < r; i++){
            if(boxes[i] == boxes[r]){
                d[l][r][k] = max(d[l][r][k], dfs(boxes, d, i + 1, r - 1, 0) + dfs(boxes, d, l, i, k + 1));
            }
        }
        return d[l][r][k];
    }
};