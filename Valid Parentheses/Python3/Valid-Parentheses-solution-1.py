class Solution:
    def isValid(self, s: str) -> bool:
        # list of left parentheses
        leftParentheses = ['(', '{', '[']
        # Dictionary of parentheses maping
        parentheseMap = dict({'(':')', '{':'}', '[':']'})
        # Make a stack hold parentheses
        stack = []
        # Iterate over each character in the sting
        for bracket in s:
            # If the bracket is a left parentheses put on the stack
            if bracket in leftParentheses:
                stack.append(bracket)
            # If the stack is empty or the top of stack does not match the bracket 
            # the string is not balanced. We use the map here to get what the matching bracket should
            # be for the top of stack
            elif len(stack) == 0 or parentheseMap[stack.pop()] != bracket:
                return False
            # If the stack is not empty the string is not balanced
        return len(stack) == 0