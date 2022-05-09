# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        if root is None:
            return root
        # get the right side swapped
        left = self.invertTree(root.right)
        # get the left side swapped and updated to right
        root.right = self.invertTree(root.left)
        # swap the right to be left
        root.left = left
        
        return root