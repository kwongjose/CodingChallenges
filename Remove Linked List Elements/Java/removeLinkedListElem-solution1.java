/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        
        // The current node to look at
        ListNode current = head;
        // A tail to lookback and skip nodes with value to remove
        ListNode trail = null;
        // loop until all nodes visited
        while(current != null){

            if(current.val == val){
               // If current should be removed and trail is set set trail's next to the next node after current
               // Then advance current
                if(trail != null){
                    trail.next = current.next;
                    current = current.next;
                } else { // trail has not been set the new head is the node after current. Since the current node should be removed and we do not have a node visited that should stay yet
                    current = current.next;
                    head = current;
                }
            } else { // If the current node should stay trail is the current node and advance current
               trail = current; 
               current = current.next;
            }
            
            
        }
        return head;
    }
}