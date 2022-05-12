public class Solution {
    public int LengthOfLongestSubstring(string s) {
        //all chars seen
        Dictionary<char, int> seen = new Dictionary<Char, int>();
        //longest length
        int runIdx = 0;
        int longest = 0;
        int runLength = 0;
        char[] sChar = s.ToCharArray();
        for(int i = 0; i < sChar.Length; i++){
            // if we have seen the cha clear the map
            if(seen.ContainsKey(sChar[i])){
                seen.Clear();
                // restart our loop at one more than the index of the last run
                i = runIdx++;
                // Add the current run & set the length to 1
                seen.Add(sChar[i], 1);
                runLength = 1;
            }else{ // if we haven't seen the char yet add to map and increment run
                seen.Add(sChar[i], 1);
                runLength++;
            }
            // Update the longest run
            longest = (longest > runLength) ? longest : runLength;
        }

        return longest; 
    }
}