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
    public int maxDepth(TreeNode root) {
        // If root is null return 0 as there is not node
        if(root == null){
           return 0;
       }
       // get the max from the left side then the max from the right
       // Add 1 for each recursive call
       return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
    }
}