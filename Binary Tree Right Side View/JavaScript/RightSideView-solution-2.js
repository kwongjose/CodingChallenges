/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 *                   5
 *                 /   \
 *                3     7
 *               /  \  
 *              2    4 
 *  
 */


/**
 * Returns the right side view of the tree using a queue
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    
    // Initialize the queue with the root node
    const queue = [root]; // eg: [ {l: 3 r: 7 v: 5 } ]
    // Make the array that holds the result
    const res = [];
    // loop as long as the queue is not empty
    while (queue.length > 0) {
        // set size to the length of the queue
        const size = queue.length;
        for (i = 0; i < size; i++) {
            // Take the first item in the queue and remove it
            const node = queue.shift(); 
            // Add the removed node's left and right to the queue if any
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            // If we have looped to the end of the queue when the for loop started add the node value to response
            if (i === size - 1) {
                res.push(node.val); 
            }
        }
    }
    
    return res;
};