/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {

    let fast = head
    let slow = head
    // iterate using a fast and slow node until they match
    while(fast != null && fast.next != null){
        fast = fast.next.next
        slow = slow.next
        // if they match traverse nodes from the head until they match
        if(fast === slow){
            slow = head
            while(slow !== fast){
                slow = slow.next 
                fast = fast.next
            }
            return slow
        }


    }
    
    return null
};