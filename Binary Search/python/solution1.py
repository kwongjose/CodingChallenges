class Solution:
    def search(self, nums: List[int], target: int) -> int:
       
        start = 0
        end = len(nums)-1
        
        while start < end:
            # get the mid value
            mid = ((end - start+1) // 2) + start
            # if the mid value is greater than the index the target is at least 1 to the left
            # the target is between the start and the mid point so we can end at the mid
            if nums[mid] > target:
                end = mid - 1
            else: # if the mid value is less than the target is between mid and end so we can start at the mid point
                start = mid
    
        return start if nums[start] == target else -1