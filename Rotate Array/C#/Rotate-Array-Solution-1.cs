public class Solution {
    public void Rotate(int[] nums, int k) {
        int[] left = new int[nums.Length];
        
        for(int idx = 0; idx < nums.Length; idx++){
            if(idx+k < nums.Length){
                left[idx+k] = nums[idx];
            }
            else{
                left[(idx+k)%nums.Length] = nums[idx];
            }
        }
        for(int i = 0; i < left.Length; i++){
        nums[i] = left[i];
        }
    }
}