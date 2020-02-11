# Definition for an interval.
# class Interval(object):
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution(object):
    """
        Mergers overlaping intervals.
        Sorts the interval list
        Generates a new interval list passing in intervals that do not over lap
        If intervals overlap merge the overlaping intervals and add to the interval list
    """
    def merge(self, intervals):
        """
        :type intervals: List[Interval]
        :rtype: List[Interval]
        """
        # sort the list of interval
        intervals.sort(key=lambda x: x.start)
        newInterval = []
        if len(intervals) > 0 :
            start = None
            end = 0
            # loop over intervals in the list
            for interval in intervals:
                # If Start is not set assign start and end to the interval start and end
                if start == None:
                    start = interval.start
                    end = interval.end
                # If end is greater or equal the interval start
                # Assign end to the end of the interval unless it is equal
                if end >= interval.start:
                    end = end if end > interval.end else interval.end
                else:
                    # if end is less than the start of the interval
                    # Add a new interval with the current start and end
                    # Update start and end with the values of the current interval
                    newInterval.append(Interval(start,end))
                    start = interval.start
                    end = interval.end
            # Add the last interval to the new list
            newInterval.append(Interval(start,end))  
        return newInterval