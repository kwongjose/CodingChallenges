/**
 * @param {number} n - The number of the column title to find the name of
 * @return {string} The column title eg: 1-> A 27 -> AA
 */
var convertToTitle = function(n) {
    // Array to map the number to letters to
    const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    // Array to hold letters
    const str = [];
    // If n is less than 26 just return the single letter
    if (n <= 26) {
        // Offset by 1 since Array starts at 0
        return letters[n - 1];
    } else {
        let num = n;
        // Loop until num is 0
        while (num != 0) {
            // divide num and then get the mod
            const quotient = Math.floor(num / 26);
            const remainder = num % 26;
            // If num is 26 or less add the letter then break since there are no more letters to find
            if (num <= 26) {
                str.push( letters[num - 1]);
                break;
            }
            // If r is 0 we want to add Z otherwise we want to add r - 1
            // Assign d to be the new num
            if (remainder === 0) {
                str.push('Z');
                // If r is zero decrement - 1 from  d
                num = quotient - 1;
            } else {
                str.push(letters[remainder - 1]);
                num = quotient;
            }
        }
    }
    // reverse the array and join to get the string of the column title
    return str.reverse().join('');
    
};