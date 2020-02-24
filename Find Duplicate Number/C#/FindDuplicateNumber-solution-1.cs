public class Solution {
    /// <summary>
    /// Returns the value that is seen in the array twice.
    /// Searches from both start and end using Dictionary to track seen values
    /// </summary>
    /// <param name='nums'>The Array to search for duplicates in</param>
    /// <retruns>The value that is in the array twice</returns>
    public int FindDuplicate(int[] nums) {
        // Map to hold number that have been seen
        Dictionary<int, int> map = new Dictionary<int, int>();
        // The last index
        int right = nums.Length - 1;
        // Loop over the array from both the start and the end of the array. 
        // Decremting the right value and incrementing the left value at each loop
        for(int left = 0; left < nums.Length; left++, right--){
            // If the value at index left & right are the same or the value at left has been seen return the left value
            if (nums[left] == nums[right] || map.ContainsKey(nums[left]) ) {
                 return nums[left]; 
            }
            // If the value at the right index has been seen return the right value
            if (map.ContainsKey(nums[right]) ){
                return nums[right];
            }
            // If nither has been seen add left and right values as keys to the dictionary
            map[nums[left]] = left;
            map[nums[right]] = right;
        }
        return 1;
    }
}