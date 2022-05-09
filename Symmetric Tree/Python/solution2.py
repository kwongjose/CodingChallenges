# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if root is None:
            return True
        return self.isSymmetricHelper(root.left, root.right)
    # simple recursive solutions
    # the tree on the left of the node should equal the tree on the right
    # apply this until we get a None node
    # both nodes should be None
    # each level the left and right values should be equal
    def isSymmetricHelper(self, left, right):
        if left is None or right is None:
            return left == right
        if left.val != right.val:
            return False
        return self.isSymmetricHelper(left.left, right.right) and self.isSymmetricHelper(left.right, right.left)