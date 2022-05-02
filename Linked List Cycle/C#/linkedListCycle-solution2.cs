/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    // use a runner to look for a cycle
    // The runner advances in the list twice for ever advance h
    public bool HasCycle(ListNode head) {
        // if head is null or has not next there is no cycle
        if(head == null || head.next == null) {
            return false;
        }
        // track a h that advances in the list 1 node at a time
        ListNode h = head;
        // track a runner that advaces 2 at a time
        ListNode runner = head.next;
        
    // loop until h & runner are equal
    // If there is a cycle the runner will cycle back and eventually catch up to h
      while(h != runner) {
          if(runner == null || runner.next == null) {
              return false;
          }
          
          // advance the h by one
          h = h.next;
          // advance the runner by 2 nodes
          runner = runner.next.next;
      }
        
        return true;
    }
}