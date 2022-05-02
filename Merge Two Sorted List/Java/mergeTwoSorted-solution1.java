/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode current, head;
        // If either list is null return the other list
        if(l1 == null) return l2;
        if(l2 == null) return l1;
        // Assign current to whatever list's head is smallest. Then advance the list used
        if(l1.val <= l2.val){
            current = l1;
            l1 = l1.next;
        }else{
            current = l2;
            l2 = l2.next;
        }
        
        head = current;
        // If either list is null break from the loop
        while(l1 != null || l2 != null){
            // if either list is null the rest of the sorted list is the remained of the other list
            if(l1 == null || l2 == null){
                current.next = l1 == null ? l2 : l1;
                break;
            }
    
            // The next node is the node who's value is least between the heads of l1 and l2. Assign to next and advance the used list
            if(l1.val < l2.val){
                current.next = l1;
                l1 = l1.next;
            }else{
                current.next = l2;
                l2 = l2.next;
                }
                // Update current to be the recently added node
                current = current.next;
        }

        return head;   
    }
}