# The isBadVersion API is already defined for you.
# def isBadVersion(version: int) -> bool:

class Solution:
    def firstBadVersion(self, n: int) -> int:
        start = 1
        end = n
        while start < end:
            # find the mid point
            mid = (start + end) // 2
            # If mid is a bad version the first bad version is between start and mid
            if isBadVersion(mid) == True:
                end = mid
            else:
                # if mid is not a bad version the first bad version is between end and the mid
                start = mid + 1
        return start
   