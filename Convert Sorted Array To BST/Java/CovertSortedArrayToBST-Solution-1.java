public class Solution {
    public TreeNode sortedArrayToBST(int[] nums) {
        // If Nums  is empty or null return null;
        if (nums == null || nums.length ==0){
            return null;
        }
        // return the root of the new Tree
        return getTreeNode(nums, 0, nums.length-1);
    }
    
    /**
     * Recursively builds a BST by building the left and right sub trees
     * @param nums - The sorted array of nums to build the tree from
     * @param start - The index in nums to start from for the sub tree
     * @param end - The end in nums that the sub tree ends at
     * @return The head of the tree made
     */
    private TreeNode getTreeNode(int[] nums, int start, int end){
        // If the start index is the
        if (start > end){
            return null;
        }
        // Get the middle index. End - start gets the total length of the subArray
        // Add start to get the correct index value
        int middle = start + (end - start) / 2;
        TreeNode n = new TreeNode(nums[middle]);
        // Left tree is made of value from start to 1 less than middle
        n.left = getTreeNode(nums, start, middle-1);
        // Right tree is made of values to to the right of middle to the end of array
        n.right = getTreeNode(nums, middle+1, end);
        // return the new node
        return n;
    }
}