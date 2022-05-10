# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        compMap = {}
        return self.helper(root, k, compMap)
        
    def helper(self, node, target, compMap):
        if node is None:
            return False
        # if the node val is a value we need for the target return true
        if node.val in compMap:
            return True
        # sub the node val from target to find the value we need to add to to reach the target
        # Add the comp to the map
        comp = target - node.val
        compMap[comp] = 1
        # recurse on the left and right branchs
        return self.helper(node.left, target, compMap) or \
                self.helper(node.right, target, compMap)

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right