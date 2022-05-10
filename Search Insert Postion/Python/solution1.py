class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        return self.helper(nums, target, 0, len(nums)-1)
    
    def helper(self, nums, target, start, end):
        # start of the list
        start = 0
        # end index of the list
        end = len(nums)-1
        
        while start < end:
            # get the middle value 
            mid = ((end - start+1) // 2) + start
            # if the value is found return index
            if nums[mid] == target:
                return mid 
            # if the mid value is greater than the index the target is between mid and start
            elif nums[mid] > target:
                end = mid - 1
            else: # if mid is less than the target the target is between mid and end
                start = mid
    
        return start if nums[start] >= target else start + 1