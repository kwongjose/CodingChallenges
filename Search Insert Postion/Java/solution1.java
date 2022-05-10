class Solution {
    public int searchInsert(int[] nums, int target) {
        // If the last index is less than the target the target would be added to the end
        if(nums[nums.length-1] < target) {
            return nums.length;
        } 
        // if the first index value is great than the target it would get added to the start
        if(nums[0] > target){
           return 0; 
        } 
        // Brute force to find the correct index or its position
        for(int i = 0; i < nums.length; i++){
           if(nums[i] == target) return  i;
            if(nums[i] > target) return i;
        }
        return 0;
    }
    
  
}