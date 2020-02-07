/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    /**
     * Remove the last Kth items from end of the Array
     * Add the removed items to the start of the Array
     */
    nums.splice(0, 0, ...nums.splice(nums.length - k, k) );
};