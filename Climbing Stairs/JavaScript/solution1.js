/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    // Array holding steps needed for 0-2
    let steps = [0, 1, 2]

    // Add to array until we reach n.
    // i steps is equal to i-1 + i -2 steps
    for(let i = 3; i <= n; i++) {
        steps[i] = steps[i-1] + steps[i-2]
    }
    return steps[n]
};

