/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
        // Use a map to track nodes that have been visited
    public boolean hasCycle(ListNode head) {
        // map to track the nodes
        HashMap<ListNode, Integer> visited = new HashMap<ListNode, Integer>();
        
         // iterate over each next node until null
        while(head != null){
            // if we have seen the node there is a cycle
            if(visited.containsKey(head)) {
                return true;
            } else {  // if we have not seen the node add it to the map and proceed to next node
                visited.put(head, 0);
                head = head.next;
            }
        }

        // if head equals null ever there is no cycle
        return false;
    }
}