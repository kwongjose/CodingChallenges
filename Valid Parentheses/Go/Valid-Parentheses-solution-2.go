func isValid(s string) bool {
	// Make  the stack and two maps for left and right parens
    var stack []rune
    var Lparen map[rune]rune
    Lparen = make(map[rune]rune)
    Lparen['['] = ']'
    Lparen['('] = ')'
    Lparen['{'] = '}'
    var Rparen map[rune]rune
    Rparen = make(map[rune]rune)
    Rparen[']'] = '['
    Rparen[')'] = '('
    Rparen['}'] = '{'
    // loop over string
    for _, char := range s {
		_, found := Lparen[char]
		// Push if char is a left Parent or stack is empty
        if len(stack) == 0 || found  {
            stack = append(stack, char)
        } else {
            top := len(stack) - 1;
			var stackTop = stack[top]
			// If the top of the stack matches the Rparen key pop
            if stackTop == Rparen[char] {
                stack = stack[:top]
            } else {
                stack = append(stack, char)
            }    
        }       
    }
    return len(stack) == 0;
}