/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums - Sorted array to build the tree
 * @return {TreeNode} The root node
 */
var sortedArrayToBST = function(nums) {
    /**
     * The tree is made up of the middle value and the values to left and right make up
     * The left and right sub trees. Recursively builds the left and right trees to by building up 
     * until there is only 1 node.
     */

    // If the array is empty return null
    if(nums.length > 0) {
        // Get the middle index
        const mid = Math.floor(nums.length / 2);
        // Make a node whos value is the value in the middle of the array
        let node = new TreeNode(nums[mid]);
        // If there is only one value in the array return the new node
        if(nums.length === 1) {
            return node;
        } else {
            // Assign the left node to be the tree made up of the values to the left of mid
            node.left = sortedArrayToBST(nums.slice(0, mid));
            // Assign the right ode to be the tree made up of the value to the right of mid
            node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
            // Return the new node
            return node;
        }
    } else {
        return null;

    }
    
    
};