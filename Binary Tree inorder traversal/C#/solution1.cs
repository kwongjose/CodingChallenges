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
    public IList<int> InorderTraversal(TreeNode root) {
        List<int> vals = new List<int>();
        traversal(root, vals);
        return vals;
    }
    
    public void traversal(TreeNode root, List<int> vals){
        if(root == null){
            return;
        } else {
            traversal(root.left, vals);
            vals.Add(root.val);
            traversal(root.right, vals);
        }
    }
}