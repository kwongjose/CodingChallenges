/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public int val;
 *     public TreeNode left;
 *     public TreeNode right;
 *     public TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public TreeNode InvertTree(TreeNode root) {
        if(root != null){
            helper(root);
        }
        return root;
    }
    
    private void helper(TreeNode root) {
        if(root == null){
            return;
        }
        // recurse until we get to a leaf node
        helper(root.left);
        helper(root.right);
        // Swap the left and right nodes
        TreeNode temp = root.left;
        root.left = root.right;
        root.right = temp;
    }
}