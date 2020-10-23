func isValid(s string) bool {
    var stack []rune;
    // loop over string
    for _, char := range s {
        if len(stack) > 0 {
            if char == '{' || char == '(' || char == '[' {
             stack = append(stack, char)
            } else {
                top := len(stack) - 1;
                var stackTop = stack[top]
                if char == '}' && stackTop == '{' ||
                   char == ']' && stackTop == '[' ||
                   char == ')' && stackTop == '(' {
                    stack = stack[:top]
                } else {
                    stack = append(stack, char)
                }    
            }
        } else {
            stack = append(stack, char)
        }
    }
    return len(stack) == 0;
}