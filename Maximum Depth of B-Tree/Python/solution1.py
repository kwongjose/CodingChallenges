# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        if root is None:
            return 0
        return self.max(root, 1, 1)
        
    def max(self, root, maxv, level):
        if root is None:
            return level-1
        # Recurse the left side. If the depth is greater than the tracked max set it to the max
        depth = self.max(root.left, maxv, level+1)
        if depth > maxv:
            maxv = depth
        # Recurse the right side. If the depth is greater than the tracked max set it to the max
        depth = self.max(root.right, maxv, level+1)
        if depth > maxv:
            maxv = depth
            
        return maxv