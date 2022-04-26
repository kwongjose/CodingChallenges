class Solution {
    public int[][] matrixReshape(int[][] mat, int r, int c) {
        // Get the length of the matrix. IE number of rows
        int rowS = mat.length;
        // Get the length of a row in the matrix. IE number of columns
        int colS = mat[0].length;
        // If r*c is not the same as the rows * columns of the matrix we can not solve so just return the matrix
        if(rowS * colS != r*c) {
            return mat;
        }
        
        // Make a 2d array of with r rows and c columns
        int[][] result = new int[r][c];
        // iterate over the rows
        // set values to track both result rows and matrix rows
        for (int mRow = 0, rRow = 0, rCol = 0; mRow < rowS; mRow++) {
            // iterate over the columns
            for (int mCol = 0; mCol < colS; mCol++, rCol++) {
                // if the column is the same number as the result increment rows and reset column
                if (rCol == c) {
                    rRow++;
                    rCol = 0;
                }
                // Set the result matrix values to the corresponding matrix value
                result[rRow][rCol] = mat[mRow][mCol];
            }
        }
        
        return result;
    }
}