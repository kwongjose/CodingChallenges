/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> list = new ArrayList<List<Integer>>();
        // If empty return the empty list
        if (root != null)  {
            // pass in root and the new  list. The root is level/index 0
          return  levelOrderHelper(root, 0, list);
        }
    
      
    return list;
    }
    
    public List<List<Integer>> levelOrderHelper(TreeNode root, int level, List<List<Integer>> list) {
        // check if a list for a level has been added.
        if (list.size()  <= level) {
            list.add(level, new ArrayList<Integer>());
        }
        // get the list for a given level and add the nodes value
        List<Integer> li = list.get(level);
        li.add(root.val);
        // recurse on the left and right nodes adding to the level
        if (root.left != null) {
               levelOrderHelper(root.left, level + 1, list);
        }
        if (root.right != null) {
            levelOrderHelper(root.right, level + 1, list);
        }
        // Return the new list
        return list;
    }
}