/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {

    // memoization to store num of paths to get to corner from each location
    let paths = []
    for(let i = 0; i < m; i++) {
        paths.push([])
    }
    return helper(m, n, 0, 0, paths)
};

var helper = function(m, n, row, col, paths) {
    // if at the corner return 1 since that is one path 
    if(row === m - 1 && col === n - 1) {
        return 1
    }
    // if at the bottom we can only go right
    if(row === m-  1) {
        return helper(m, n, row, col + 1)
    }
    // if all the way right we can only go down
    if(col === n-1) {
        return helper(m, n, row + 1, col)
    }
    // if we have reached this square before return the number of paths to the corner for it
    if(paths[row][col] != undefined){
        return paths[row][col]
    }
    // The path num for any location is the sum of the path nums after going down or right
    pathNum = helper(m, n, row + 1, col, paths) + helper(m, n, row, col + 1, paths)
    // save the number of paths for the grid location
    paths[row][col] = pathNum
    // return the path num for the current location
    return paths[row][col]
}
