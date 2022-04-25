class Solution(object):
    def intersect(self, nums1, nums2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        ## Find the longerest and shortest arrays
        longest = nums1 if len(nums1) >= len(nums2) else nums2
        shortest = nums1 if len(nums1) < len(nums2) else nums2
        result = []
        ## Iterate over the shortest array
        for num in shortest:
            # check if the num is in longest
            if num in longest:
                ## if the longest holds more than the number already in result add it again
                if longest.count(num) > result.count(num):
                    result.append(num)
        return result