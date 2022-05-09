## More of a fun round about method where the
# tree is loaded into a 2d array and index values are checked

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
        order = []
        order = self.isSymmetricHelper(root, order, 0)
      
        # iterate of the levels
        for l in range(len(order)):
            last = len(order[l])-1
            # iterate over the level
            # the last index should equal the firsts index
            # exit when the index are equal. Return false if index values are not equal
            for i in range(len(order[l])):
                if last == i:
                    break
                if order[l][i] != order[l][last]:
                    return False
                i += 1
                last -= 1
           
        return True
        
    #3 return an in order traversal of the tree with a new array for each level
    def isSymmetricHelper(self, node, order, level):
        if len(order)-1 < level:
            order.append([])
        if node is None:
            order[level].append(None)
            return order
        order[level].append(node.val)
        
        self.isSymmetricHelper(node.left, order, level+1)

        self.isSymmetricHelper(node.right, order, level+1)
        
        return order