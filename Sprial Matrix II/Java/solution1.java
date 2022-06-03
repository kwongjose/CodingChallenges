class Solution {
    public int[][] generateMatrix(int n) {
        int[][] result = new int[n][n];
        int col = -1;
        int row = 0;
        int left = 0;
        int right = n-1;
        int top = 1;
        int bottom = n-1;
        int cnt = 0;
        while(cnt < n*n){
 
            // move right
            for(col = col + 1; col <= right; col++){
                if(cnt > n*n){break;}
                result[row][col] = ++cnt;
            }
            col = right;
            right--;
            // move down
            for(row = row+1; row <= bottom; row++){
                result[row][col] = ++cnt;
            }
            row = bottom;
            bottom--;
            // more left
            for(col = col - 1; col >= left; col--){
                result[row][col] = ++cnt;
            }
            col = left;
            left++;
            // move up
            for(row = row - 1; row >= top; row--){
                result[row][col] = ++cnt;
            }
            row = top;
            top++;
        }
        return result;
    }
}