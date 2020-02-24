/**
 * @param {number[]} bits - Character bits eg: [1, 1, 0, 1, 0, 0]
 * @return {boolean} If the last bit is a single bit bit character
 */
var isOneBitCharacter = function(bits) {
    // loop over all bits in array
    for(let i = 0; i < bits.length; i++){
        const bit = bits[i];
        // If the bit is 1 it must be part of a 2 bit character
        if(bit === 1 ){
            // Increment i so we skip the next bit
            i++;
            // If i is now the last index in the array the last bit is no a single bit character
            if(i >= bits.length - 1){
                return false;
            }
        }
    }
    return true
};