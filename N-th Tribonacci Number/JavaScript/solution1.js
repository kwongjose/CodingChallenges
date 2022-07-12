/**
 * @param {number} n
 * @return {number}
 */
 var tribonacci = function(n) {
    // return the known values for n = 0,1,2
    if(n === 2 || n == 1) {
        return 1
    } else if(n === 0) {
        return 0
    }
    // store them in array
    let tribo = [0, 1, 1]
    // add values to array using previously calculated values
    for(let i = 3; i <= n; i++){
        tribo[i] = tribo[i-1] + tribo[i-2] + tribo[i-3]
    }
    return tribo[n]
};
