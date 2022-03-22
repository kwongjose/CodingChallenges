/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
     // Track the max value of the running count
    var max = nums[0]
    // track the largest max value of the running count found
    var runMax = nums[0]
    if(nums.length < 2){
        return nums[0]
    }

    // Check if the value is great than the value added to the max
    // if it is it is new max
    // If it isnt add the value to the max
    // check if the max is greater than the largest running max so far.
    for(var i = 1; i < nums.length; i++) {
        if( nums[i] > max + nums[i]) {
            max = nums[i] 
        } else {
            max = max + nums[i]
        }
        if(max > runMax) {
            runMax = max
        }
    }
    
    return runMax
};