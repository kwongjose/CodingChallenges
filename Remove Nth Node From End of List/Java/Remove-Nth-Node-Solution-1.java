/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode remove = head;
        
        int depth = 0;
        HashMap<Integer, ListNode> nodeMap = new HashMap();
        while(remove != null){
           nodeMap.put(depth, remove);
            depth++;
            remove = remove.next;
        }
        remove = nodeMap.get(depth-(n));
        if(remove.next == null && nodeMap.get(depth-n-1) == null){
            return null;
        }else if(remove.next == null){
            nodeMap.get(depth-n-1).next = null;
        }else if(remove.next != null && nodeMap.get(depth-n-1) != null){
           nodeMap.get(depth-n-1).next = remove.next; 
        } else if(remove.next != null){
            head = remove.next;
        }
        return head;
    }
}