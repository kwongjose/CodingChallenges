/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    for(let i = matrix.length - 1; i >= 0; i--){
        for(let t = 0; t < matrix.length; t++) {
            let num = matrix[i].shift();
            matrix[t].push( num );
        }
    }
};