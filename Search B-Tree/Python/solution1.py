# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        # if we are past a leaf return
        if root is None:
            return root
        # return the node if it is the target val
        if root.val == val:
            return root
        # if the val is less than the root val it must be in the left subTree if it exist
        if val < root.val:
            return self.searchBST(root.left, val)
        else: # if the val is greater it must be in the right subTree if it exist
            return self.searchBST(root.right, val)