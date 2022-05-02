public class Solution {
    public bool IsAnagram(string s, string t) {
        // If the 2 strings are not the same length return false
        if(s.Length != t.Length) {
            return false;
        }
        // Map to track the number of each char in s
        Dictionary<char, int> map = new Dictionary<char, int>();
        
        // Load the map from s. Counting each char 
        foreach(char ch in s){
             if(map.ContainsKey(ch)){
                 map[ch] = map[ch]+1;
             }else {
                 map.Add(ch, 1);
             }
        }
        
        // Loop over t. If char is found decrement until it reaches 0. Then remove the key.
        // If char is not found return false
        foreach(char ch in t){
            if(map.ContainsKey(ch)){
                int cn = map[ch];
                if(cn < 2 ){
                    map.Remove(ch);
                }else {
                    map[ch] = cn-1;
                }
                
            } else {
                return false;
            }
        }
        
        
        return true;
    }
}