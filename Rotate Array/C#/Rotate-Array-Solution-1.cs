public class Solution {
    /// <summary>Rotates an Array k places to the right using a placeholder Array</summary>
    /// <param name='nums'>The Array to shift values right</param>
    /// <parm name='k'>The number of places to shift the Array right</param>
    public void Rotate(int[] nums, int k) {
        // Create a new Array to hold values that have been shifted right.
        // This will be used to update the nums Array
        int[] left = new int[nums.Length];
        
        for(int idx = 0; idx < nums.Length; idx++){
            /*
                If idx + k is in range the value is shifted right but not off the array.
                Place the value from nums[index] into left[index + k] shifting it right

                ex:
                    nums[0, 1, 2, 3, 4], left[null, null, null, null, null]
                    k = 2; idx = 1
                    k + idx = 3
                    left[3] = nums[1]
                    nums[0, 1, 2, 3, 4], left[null, null, null, 1, null]
            */
            if(idx + k < nums.Length) {
                left[idx + k] = nums[idx] ;
            }
            else {
                /*
                    If idx + k is greater than the length of the nums array the value
                    at nums[index] is shifted right past the end of the nums Array.
                    Take the mod of  idx + k and the length of nums to find the index at the start of the left array
                    that the nums value has been shifted to

                ex:
                    nums[0, 1, 2, 3, 4], left[null, null, null, null, null]
                    k = 2; idx = 4
                    k + idx = 6
                    6 % 5 = 1;
                    left[1] = nums[4]
                    nums[0, 1, 2, 3, 4], left[null, 4, null, null, null]
                */
                left[(idx + k) % nums.Length ] = nums[idx];
            }
        }
        // Loop over left and update nums with the new shifted order
        for(int i = 0; i < left.Length; i++){
            nums[i] = left[i];
        }
    }
}