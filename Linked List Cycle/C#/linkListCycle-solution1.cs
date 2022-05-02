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
    // Use a map to track nodes that have been visited
    public bool HasCycle(ListNode head) {
        // if the head is null or has no next there is no cycle
        if(head == null || head.next == null) {
            return false;
        }
        // map to track the nodes
        Dictionary<ListNode, int> map = new Dictionary<ListNode, int>();
        
        // iterate over each next node until null
        while(head != null) {
            // if we have seen the node there is a cycle
            if(map.ContainsKey(head)){
                return true;
            } else { // if we have not seen the node add it to the map and proceed to next node
                map.Add(head, 1);
                head = head.next;
            }
        }
        // if head equals null ever there is no cycle
        return false;
    }
}