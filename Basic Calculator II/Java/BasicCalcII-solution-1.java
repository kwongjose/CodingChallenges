import java.util.Stack;

public class Solution {
    public int calculate(String s) {
        int len;
        // Handle cases where string is null or empty
        if( s == null || (len = s.length()) == 0) {
            return 0;
        } 
        // stack to hold all numbers
        Stack<Integer> stack = new Stack<Integer>();
        // The current number
        int num = 0;
        // The current sign
        char sign = '+';
        // Loop over all characters in String s
        for(int i = 0; i < len; i++){
            if( Character.isDigit(s.charAt(i)) ){
                // Build up the number if Num has non zero value multiply by 10 so s='12' becomes 12 rather then 3
                // - '0' ensures that we get the number from the ascii value
                num = num * 10 + s.charAt(i) - '0';
            }
            // if The charter is not a digit, blank or last number
            if(( !Character.isDigit(s.charAt(i)) &&' '!= s.charAt(i)) || i == len - 1){
                // push the negative of the num
                if(sign == '-'){
                    stack.push(-num);
                }
                if(sign == '+'){
                    stack.push(num);
                }
                // evaluate multiplication and division immediately
                if(sign == '*'){
                    stack.push(stack.pop() * num);
                }
                if(sign == '/'){
                    stack.push(stack.pop() / num);
                }
                // update sign and reset num
                sign = s.charAt(i);
                num = 0;
            }
        }
        // sum and return the contents of the stack
        int re = 0;
        for(int i : stack){
            re += i;
        }
        return re;
    }
}