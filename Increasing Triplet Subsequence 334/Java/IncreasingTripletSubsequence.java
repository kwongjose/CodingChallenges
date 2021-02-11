class Solution {
    public boolean increasingTriplet(int[] nums) {
        // Set to max value so first numbers found are always smaller
        int small = Integer.MAX_VALUE;
        int large = Integer.MAX_VALUE;

        // Check if a value is smaller than the smallest number or largest number.
        // If it is larger than both return true
        for(int i = 0; i < nums.length; i++){
            if(nums[i] <= small){
                small = nums[i];
            } else if(nums[i] <= large) {
                large = nums[i];
            } else {
                return true;       
            }
        }
        return false;
    }
}