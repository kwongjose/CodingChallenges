/**
 * Each value in n row c column is the new value in c row n column
 * So starting from the n working to 0 we can remove a value and add it to the end of
 * c row.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // iterate over the matrix rows from the end
    for(let i = matrix.length - 1; i >= 0; i--){
        // iterate over the columns of a row starting from 0
        for(let t = 0; t < matrix.length; t++) {
            // remove the first item in row i
            let num = matrix[i].shift();
            // add the item to the row number that matches the column number
            matrix[t].push( num );
        }
    }
};

/**
 * 0 1 2
 * 3 4 5
 * 6 7 8
 * 
 * 0 1 2 6
 * 3 4 5
 * 7 8
 * 
 * 0 1 2 6
 * 3 4 5 7
 * 8
 * 
 * 
 * 
 * 
 */