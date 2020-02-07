public class Solution {
    ///<summery>Validates that the passed string is valid parens, Using a stack to track seen chars</summery>
    ///<param name='s'>The string to validate</param>
    ///<returns>If s is a string of valid parens</returns>
    public bool IsValid(string s) {
        // Stack to place charaters on
        Stack stack = new Stack();
        // loop over each char in the passed string
        foreach(char p in s){
            // If the stack is not empty check if the current p closes the char at the top of the stack
            if(stack.Count > 0) {
                char top = (char)stack.Peek();
                if( (p == ')' && top == '(') ||
                    (p == ']' && top == '[') ||
                    (p == '}' && top == '{') ) {
                    stack.Pop();
                } else {
                    // If the current char does not close add it to the stack
                   stack.Push(p);
                    
                }
            } else {
                // If the stack is empty add the current char to the stack
                stack.Push(p);
            }
        }
    // If the Stack is not empty all parens were not closed.
    return stack.Count == 0;
    }
}