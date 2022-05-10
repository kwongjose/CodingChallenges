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
    public TreeNode InsertIntoBST(TreeNode root, int val) {
       return search(root, val);
    }
    
    public TreeNode search(TreeNode root, int val) {
        if(root == null) {
            return new TreeNode(val);
        } else if(root.val < val){
            root.right = search(root.right, val);
            return root;
        } else if(root.val > val) {
            root.left = search(root.left, val);
            return root;
        }
        return root;
    }
}

public class TreeNode {
     public int val;
      public TreeNode left;
      public TreeNode right;
      public TreeNode(int x) { val = x; }
 }
 