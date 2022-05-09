# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        return self.pathSumHelper(root, targetSum, 0)
    
    def pathSumHelper(self, node, target, runSum):
        if node is None:
            return False
        # if the node is a leaf return if the sum is reached
        if node.left is None and node.right is None:
            runSum += node.val
            if runSum == target:
                return True
        # the node is not a leaf so add to the running sum
        runSum += node.val
        ## check the left and right branches of the tree and return true as soon as one is found
        ok = self.pathSumHelper(node.left, target, runSum)
        if ok:
            return True
        ok = self.pathSumHelper(node.right, target, runSum)
        if ok:
            return True
        
        return False