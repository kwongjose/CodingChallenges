/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    // create an array to store the frequency of letters in the window
    let freq = new Array(26)
    freq.fill(0,0,26)
    // track the most frequent letter amount
    let mostFreqLetter = 0
    // the low end of the window
    let low = 0;
    // the max
    let max = 0
    let charA = "A".charCodeAt(0)
    // loop over the array.
    // as letters enter the window increment the letters freq count
    for(let high = 0; high < s.length; high++) {

        freq[s.charCodeAt(high) - charA]++
            // Check is the new letter makes it the most frequent letter
        mostFreqLetter = Math.max(mostFreqLetter, freq[s.charCodeAt(high) - charA])
        // get the length of the current window. Subtract the number of the most frequent letters in this window. 
        // this is the number of char that must change to be the same
        let lettersToChange = high - low + 1 - mostFreqLetter
        // if the lettersToChange is more than k move the left end of the window up 1.
        // and decrement the frequency of that letter
        if(lettersToChange > k) {
            freq[s.charCodeAt(low) - charA]--
            low++
        }
        // get the length of the run and check if it is larger
        max = Math.max(high - low + 1, max)
    }
    
    
    return max
    
};