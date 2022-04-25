/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    // nums left to check for nums1
    let num1Tail = m - 1
    // nums left to check for nums2
    let num2Tail = n - 1
    // total length of both nums array
    let finished = m + n - 1;

    // loop over until all numbers checked
    while( num1Tail >= 0 && num2Tail >= 0) {
        // if num1 is bigger decrement num1 and assing value to the last unset index
        if (nums1[num1Tail] > nums2[num2Tail]){
            nums1[finished] = nums1[num1Tail]
           num1Tail--
        } else {// if smaller assing the large num2 value to the end
            nums1[finished] = nums2[num2Tail]
            num2Tail--
        }
        finished--
    }
    
    // if any num2 values are left add them to solution
    while(num2Tail >= 0) {
        nums1[finished] = nums2[num2Tail]
        finished--
        num2Tail--
    }
};