/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
    // load a map of the first p.length of s
    let sMap = loadMap({}, s, p.length)
    // load a map of the first p length of p
    let pMap = loadMap({}, p, p.length)
    let pLength = p.length
    // the bounds of the window. low is inclusive high is exclusive
    let low = 0;
    let high = pLength;
    // the return value of the function
    let anagramsStart = []
    // loop until high is equal to s length
    while(high <= s.length){
        // check if the map are equal
        if(isEqual(sMap, pMap)) {
            anagramsStart.push(low)
        }

        // update the maps for the new window
        // Decrement the inclusive low value
        sMap[s[low]]--
        // increment the exclusive high value
        if(sMap[s[high]]) {
            sMap[s[high]]++
        } else {
            sMap[s[high]] = 1
        }
            // move the window to the right
        high++
        low++
    }
    
    return anagramsStart
    
};

// isEqual compares maps. Returns false if key/value are nto equal
var isEqual = function(sMap, pMap) {
    for(key in pMap) {
        if(sMap[key] != pMap[key]) {
            return false
        }
    }
    return true
}

// loadMap populates the map with the first len frequencies 
var loadMap = function(charMap, str, len) {
    for(let i = 0; i < len; i++){
        let char = str[i]
        if(charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }
    return charMap
}