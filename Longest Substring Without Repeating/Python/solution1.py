class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # length of the current run
        run = 0
        # The max run so far
        maxRun = 0
        # The start of the current run
        runStart = 0
        # dic to store chars seen. Value is the last index it was seen
        myDic = {}
        # quick exit for edge case
        if len(s) == 1:
            return 1
        for idx in range(len(s)):
            # if we have not seen the char yet update the run
            if s[idx] not in myDic:
                run = idx - runStart + 1
            else: # if we have seen the char and it's index is before the start of the current run do nothing
                if myDic[s[idx]] < runStart:
                    run = idx - runStart + 1
                else: # if it's index is after the start of the current run the next run starts at the seen chars index + 1 for length
                    runStart = myDic[s[idx]] + 1
            # add or update the char to the dic
            myDic[s[idx]] = idx
            # set max run if the current run is larger
            if run > maxRun:
                maxRun = run
        return maxRun