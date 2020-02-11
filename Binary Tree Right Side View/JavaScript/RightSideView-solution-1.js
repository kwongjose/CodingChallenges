/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * Stores each row of the tree in an matri
 *     1
 *    /  \
 *   2     4
 *  / \   /
 * 6   7  8
 * 
 *  [
 *   [ 1 ]
 *   [ 2, 4 ]
 *   [ 6, 7, 8 ]
 *  ]
 * Add the last value in each row to the result array
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    // If empty return empty
    if(root === null) return [];
    // matrix to store tree rows
    let arr = [[]];
    // pass in the root, the level of the root and the matrix
    traverse(root, 0, arr);
    // the array of right side view values
    const rightSide = [];
    for(let i = 0; i < arr.length; i++) {
        // push the last value in each row of the matrix to the result
        rightSide.push(arr[i][arr[i].length -1]);
    }
    return rightSide;
};

/**
 * Traverses the tree adding each value to the rows matrix;
 * @param {Node} root - The node to traverse on
 * @param {Number} level - the level the node is on in the tree
 * @param {Array} rows - the matrix of rows
 */
function traverse(root, level, rows){
    if(root == null) return;
    // Each time we go left or right increase the level
    traverse(root.left, level + 1, rows);
    traverse(root.right, level + 1, rows);
    // if the row already is set push the value on
    if(rows[level]){
      rows[level].push(root.val);  
    } else {
        // If the row is not initialized yes add a new row with the node value 
        rows[level] = [root.val]
    }
    
    return root;
}