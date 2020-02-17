/**
 * @param {string} s - eg: "1+4 /6-3*9"
 * @return {number}
 */
var calculate = function (s) {
    let rest = [];
    let allOps = ["+", "-", "*", "/"]
    let i = 0;
    let op = null;
    while (i < s.length) {
        let num = "";
        // Loop over string building a number. Handles multi digit numbers
        while (!allOps.includes(s[i]) && i < s.length) {
            // build the new number ignore if the char is blank space
            num += s[i] === ' ' ? '' : s[i];
            i++;
        }


        // check what the last op was
        if (op === '-') {
            rest.push(parseInt(-num)); // If it was '-' the currnt number should be a negative
        } else if (op === '+') {
            rest.push(parseInt(num))
        } else if (op === '*') { // evaluate muliplacation and division right away
            rest.push(parseInt(rest.pop()) * parseInt(num));
        } else if (op === '/') {
            let num1 = rest.pop();
            // This is done because JavaScript handles floor differently for negatives vs positive numbers
            // Track if the first num is negative and assign it to the result of the operation
            let modifier = num1 < 0 ? Math.abs(num1) : num1;
            let sign = num1 < 0 ? -Math.floor(parseInt(modifier) / num) : Math.floor(parseInt(modifier) / num);
            rest.push(sign)
        } else {
            // if there is not op yet just push the number
            rest.push(parseInt(num));
        }
        // Assign the current Op and increment the loop
        op = s[i]; 
        i++;
    }
    // return the sum of the Array
    return rest.reduce((acc, cur) => {
        return acc + cur;
    })
}