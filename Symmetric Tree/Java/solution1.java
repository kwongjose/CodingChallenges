/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    public boolean isSymmetric(TreeNode root) {
        // if the tree is empty return true
        if(root == null){
            return true;
        } else { // check the left side and right side
            return helper(root.left, root.right);
        }
    }

    public boolean helper(TreeNode left, TreeNode right){
        // Check to make sure if a leaf is null it's partner is as well
        if(left==null|| right==null){
            return left==right; 
        } else if(left.val != right.val){ // if the val of the left doesn't equal the mirror side return false
            return false;
        } else { // recursively search the tree. 
            // comparing the left side of left node & right side of right node (mirror)
            // and right side of left and left side of right
            return helper(left.left, right.right) && helper(left.right, right.left);
        }
    }
}