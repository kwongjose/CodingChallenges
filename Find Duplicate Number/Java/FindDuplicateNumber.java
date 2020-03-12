/** Note this modifies the array but is an interesting solutions */

class Solution {
    /**
     * 
     * @param nums - Array of numbers
     * @return The Duplicate number
     */
    public int findDuplicate(int[] nums) {
        // Loop over the array
        for(int i = 0; i < nums.length; i++) {
            // Get the absolute value of the index value minus 1
            int idx = Math.abs(nums[i]) - 1;
            // If the value in the index is negative we have seen the value at index i
            if(nums[idx] < 0) {
                // Return the absolute value of index i
                return Math.abs(nums[i]);
            } else {
                // If the value is not negative make it negative
                nums[idx] = -nums[idx]; 
            }
        }
        return -1;
    }
}