# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def levelOrder(self, root):
        """
        :type root: TreeNode
        :rtype: List[List[int]]
        """
        order = []
        
        if root is None:
            return order
        return self.levelHelper(root, order, 0)
        
    def levelHelper(self, node, order, level):
        if node is None:
            return order
        # Using 0 index if the list is less than the level add an empty list
        if len(order)-1 < level:
            order.append([])
        # traverse the tree. Add a node to the array at each level
        # recursively call on left & right node adding 1 to level
        order[level].append(node.val)
        self.levelHelper(node.left, order, level+1)   
        self.levelHelper(node.right, order, level+1)
        
        return order
        