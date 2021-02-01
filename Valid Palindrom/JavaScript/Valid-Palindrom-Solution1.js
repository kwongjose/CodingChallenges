/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Change to same case and remove spaces. Return array of alphanumeric characters
    const lowerString = s.toLowerCase().replace(/ /g, '').match(/[a-z]|[0-9]/g)
    // If there are no matches it's not a palindrome                                                            
    if (!lowerString) {
        return true
    }
    let start = 0;
    let end = lowerString.length - 1;
    const mid = lowerString.length / 2;

    // loop from start and end.
    for (; start < mid; start++){
        // If start & end characters do not match it's not a palindrome
        if (lowerString[start] !== lowerString[end]) {
               return false
        }
        end--;
    }
    return true
};