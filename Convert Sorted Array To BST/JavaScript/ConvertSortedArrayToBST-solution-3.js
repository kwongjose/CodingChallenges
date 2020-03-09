/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {

    // This is the same as solution 2 but condensed into a single line 
    // with anonymous functions and turneries.
    // Just done for fun
    return nums.length > 0 ? function(){
        const mid = Math.floor(nums.length / 2);
        let node = new TreeNode(nums[mid]);
        return nums.length === 1 ? 
            node : function() { 
                node.left = sortedArrayToBST(nums.slice(0, mid));
                node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
                return node;
            }();
    }() : null;  
};