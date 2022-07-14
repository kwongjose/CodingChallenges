"""
# Definition for a Node.
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children
"""
""" Standard preorder traversal pattern. 
Rather than using left/right we instead itinerate on the children nodes"""
class Solution:
    def preorder(self, root: 'Node') -> List[int]:
        arr = []
        if root == None:
            return arr
        return self.helper(root, arr)
    
    def helper(self, root: 'Node', arr):
        arr.append(root.val)
        
        for child in root.children:
            self.helper(child, arr)
            
        return arr