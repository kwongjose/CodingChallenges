/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    // track the last node we saw
    prev = null
    // loop until we go past the new head
    while(head != null) {
        // save the current node
        let cur = head
        // the next node we visit will be the current node's next
        head = head.next
        // set the current node to point to the last node we saw
        cur.next = prev
        // save the node we are at as the previous node for next iterations
        prev = cur
    }
    
    return prev
};