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
    // Get the array to the left and right of the middle and the value of the middle
    let [ lf, mid, rt ] = bisect(nums);
    // If the array is empty just return;
    if(nums.length < 1) return null;
    return buildTree(lf, mid, rt);
    
};

/**
 * 
 * @param {number[]} left - Array to the left of root
 * @param {number} root - The value in the middle  of the array
 * @param {number[]} right - Array the the right of root
 */
var buildTree = function(left = null, root = null, right = null){
    // If the root is null return a new node of left. Left will be a single value in this case;
    if(root == null) {
        return new TreeNode(left);
    } else {
        // Make a new node for the value being root
        let node = new TreeNode(root); 
        // If there is a left array get the middle value and array to left and right of middle of right and build the tree;
        if(left) {
            let [ lf, mid, rt ] = bisect(left);
            
            node.left = buildTree(lf, mid, rt)
        }
        // If there is a right array get the middle value and array to left and right of middle  of right and build the tree;
        if(right) {
            let [ lf, mid, rt ] = bisect(right);
            node.right = buildTree(lf, mid, rt)
        }
        return node;
    }
};

/**
 * Returns the arrays to the left and right of the middle value and middle value
 * @param {number[]} arr  - Array of numbers
 * @returns {Array} [ leftArry, middleValue, rightArray ]
 */
var bisect = function(arr) {
    // Get the middle value
    let mid = Math.round( (arr.length - 1) / 2);
    let left = null;
    let right = null;
    // If mid isnt 0 there is a left array
    if(mid != 0){
        left = arr.slice(0, mid);

    }
    // If mid is not the last index there is a right array
    if(mid != arr.length - 1){
        right = arr.slice(mid + 1, arr.length);
    } 
    // Return the leftArray midValue and rightArray
    let m = arr[mid];
    return [left, m, right ];
}