public class Solution {
    public bool CanConstruct(string ransomNote, string magazine) {
        if(magazine.Length < ransomNote.Length) {
            return false;
        }
        // iterate over the length of the magazine and update a tuple in the map for the number each char is in the note and magazine
        Dictionary<char, (int, int)> map = new Dictionary<char, (int, int)>();
        for(int idx = 0; idx < magazine.Length; idx++) {
          
            char magChar = magazine[idx];
            if(map.ContainsKey(magChar)) {
               (int, int) t = map[magChar];
                t.Item1 += 1;
                      map[magChar] = t;
            } else {
                (int, int) t = (1, 0);
                map.Add(magChar, t);
            }
            // if past the length of the note don't check 
            if(idx <= ransomNote.Length-1){
                char ransomChar = ransomNote[idx];
                if(map.ContainsKey(ransomChar)) {
                    (int, int) t = map[ransomChar];
                    t.Item2 += 1;
                    map[ransomChar] = t;
                } else {
                    (int, int) t = (0, 1);
                    map.Add(ransomChar, t);
                }  
            }
         
        }
        
        // Iterate over the entries in the map. If a tuple has the char count less for the magazine than the note and the note has the char we cant build the note and return false
        foreach(KeyValuePair<char, (int, int)> entry in map) {
            if(entry.Value.Item1 < entry.Value.Item2 && entry.Value.Item2 != 0) {
                return false;
            }
        }
        
        return true;
        
    }
}