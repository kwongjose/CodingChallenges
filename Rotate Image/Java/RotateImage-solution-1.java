
/**
 * If we reverse each row in the matrix
 * each value in r row, c column moves to a index after adding the remainder of the values c and r from the matrix length
 * 
 * */
class Solution {
    public void rotate(int[][] matrix) {
        int l = matrix.length-1;
        // reverse each row in the matrix
        for(int r = 0; r < matrix.length; r++){
            for(int i = 0; i < matrix.length/2; i++) {
                int swap = matrix[r][i];
                matrix[r][i] = matrix[r][l-i];
                matrix[r][l-i] = swap;
            }
        }
    
                
        for(int r = 0; r < matrix.length-1; r++){
            // move each value in the matrix
            // we only  need to itinerate up to the length - the row number
            for(int c = 0; c < l-r; c++ ){
                int d = l - c - r;               
                int swap = matrix[r][c];
                matrix[r][c] = matrix[r+d][c+d];
                matrix[r+d][c+d] = swap;
            }
            
        }
    }
                

}