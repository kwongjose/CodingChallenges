class Solution {
    private boolean [][] seen;
    public int maxAreaOfIsland(int[][] grid) {
        int max = 0;
        // Array of tracked values to know if a cell has been visited
        seen = new boolean[grid.length][grid[0].length];
        // Iterate over the 2d array
        for(int r = 0; r < grid.length; r++) {
            for(int c = 0; c < grid[r].length; c++){
                if(grid[r][c] == 1) {
                    int a = Area(grid, r, c, 0);
                    if (a > max) {
                        max = a;
                    }
                }
            }
        }
        return max;
}

    public int Area(int[][] grid, int row, int col, int area) {
        // Check if row and col are inbounds. Check if the cell value is land (1). Check if the cell has been visited
        if (row < 0 || col < 0 || row >= grid.length || col >= grid[row].length || grid[row][col] == 0 || seen[row][col] == true){
            return area;
        }
        // Note that the cell as been visit
        seen[row][col] = true;
        // add a unit to the area of the island
        area += 1;
        // go to right. return the area with new land to the right
        area = Area(grid, row, col + 1, area);
        // go to left
        area = Area(grid, row, col - 1, area);
        // go up
        area = Area(grid, row - 1, col, area);
        // go down
        area = Area(grid, row + 1, col, area);
        
        return area;
    }
}

