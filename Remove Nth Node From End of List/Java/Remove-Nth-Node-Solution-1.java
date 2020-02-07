/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    /**
    * Removes the Nth node from the end of a Linked List
    * Generates a map of all nodes <key>:<Value> <placeInList>:<Node>
    * @param head - The Linked List Head
    * @param n - The place from the end of the list to remove a node
    * @returns The head of the Linked List
    */
    public ListNode removeNthFromEnd(ListNode head, int n) {
        // The node to remove
        ListNode remove = head;
        // The total length of the Linked List
        int depth = 0;
        // map of nodes where The key is the position in the list and value is the node
        HashMap<Integer, ListNode> nodeMap = new HashMap();
        // Populate the map with all nodes
        while(remove != null) {
            // Add the node -> increase depth move to next node;
           nodeMap.put(depth, remove);
            depth++;
            remove = remove.next;
        }

        // get the nth node from end of list from the map
        remove = nodeMap.get(depth-(n));
        // If the next node is null and the previous node is null We have an empty Linked List after removing the nth node
        if(remove.next == null && nodeMap.get(depth-n-1) == null) {
            return null;
        
        } else if(remove.next == null) {
             // If the removed node is at the end of the Linked List set the previous node.next to null
            nodeMap.get(depth-n-1).next = null;
        } else if(remove.next != null && nodeMap.get(depth-n-1) != null) {
            // If the removed node has a node it points to and it has a node that points to it
            // Set the previous node to point to the node remove points to.
           nodeMap.get(depth-n-1).next = remove.next; 
        
        } else if(remove.next != null) {
            // If remove points to a node but has no node that points to it removed is the head node.
            // Set head to be the node remove points to.
            head = remove.next;
        }
        return head;
    }
}