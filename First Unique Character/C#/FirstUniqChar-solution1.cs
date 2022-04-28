public class Solution {
    public int FirstUniqChar(string s) {
        // Use a map to see if a char has been seen. The value is the idx it was found
        Dictionary<char,int> map = new Dictionary<char,int>();
        // Use an array who's value notes if the char in the corresponding string index if unique
        int[] first = new int[s.Length];
        // loop through the string
        for(int idx = 0; idx < s.Length; idx++) {
            // If we have seen the char before set the index we first saw the char to 0
            if(map.ContainsKey(s[idx])){
                first[ map[s[idx]] ] = 0;
            } else { // If we have not seen the char yet add it to the map and the first array seting the value to 1
                map.Add(s[idx], idx);
                first[idx] = 1;
            }
        }
        // loop over the first array until we see a index with a 1 value and return that index
        for(int i = 0; i < s.Length; i++) {
            if (first[i] == 1){
                return i;
            }
        }
        
        return -1;
    }
    
}