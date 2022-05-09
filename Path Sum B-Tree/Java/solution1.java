/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
class Solution {

     public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode(int x) { val = x; }
    }

    public boolean hasPathSum(TreeNode root, int sum) { 
            return pathSumHelper(root,0,sum); 
    }
    
   ///**
   // pathSumHelper recursively finds a sum path
   // root: node of tree
   // curSum current sum of the path
   // target the sum to reach
   ///
    public boolean pathSumHelper(TreeNode root, int curSum, int target){
        if(root == null) return false;
        // if the sum plus the node val is the target and the node is a leaf return true
        if(curSum+root.val == target && root.left == null && root.right == null) return true;

        // check both branches of the node for a path. If either is true return
        boolean path = pathSumHelper(root.left, curSum+root.val, target) || pathSumHelper(root.right, curSum+root.val, target);
        
        return path;
    }
}