# Definition for an interval.
# class Interval(object):
#     def __init__(self, s=0, e=0):
#         self.start = s
#         self.end = e

class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[Interval]
        :rtype: List[Interval]
        """
        intervals.sort(key=lambda x: x.start)
        newInterval = []
        if len(intervals) > 0 :
            start = None
            end = 0
            for interval in intervals:
            
                if start == None:
                    start = interval.start
                    end = interval.end
                
                if end >= interval.start:
                    end = end if end > interval.end else interval.end
                else:
                    newInterval.append(Interval(start,end))
                    start = interval.start
                    end = interval.end
            newInterval.append(Interval(start,end))  
        return newInterval