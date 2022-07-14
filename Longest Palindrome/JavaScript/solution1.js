/**
 * Use a map to find duplicate letters
 * When a letter occurs twice the longest palindrome can increase by 2
 * We then forget that letter
 * Finally if any letter remains in the map we can add 1 for a single letter in the middle
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    if(s.length === 1 ) {
        return 1
    }
    let smap = {}

    let longest = 0
    for(let i = 0; i < s.length; i++){
        if(smap[s[i]]) {
            longest += 2
            smap[s[i]] = null
        } else {
            smap[s[i]] = 1     
        }
    }
    
    for( val in smap) {
        if(smap[val]){
            longest += 1
            break
        }
    }
    return longest
};