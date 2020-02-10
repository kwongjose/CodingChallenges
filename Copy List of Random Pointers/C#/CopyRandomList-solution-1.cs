/**
 * Definition for singly-linked list with a random pointer.
 * public class RandomListNode {
 *     public int label;
 *     public RandomListNode next, random;
 *     public RandomListNode(int x) { this.label = x; }
 * };
 */
public class Solution {
    ///<summery>Copies a list of nodes. Generates a map of a key node and a new value node with the key nodes value
    /// Uses that mapping to update the key nodes with the correct values for next and random</summery>
    /// <param name="head">The head of the Linked List of random nodes</param>
    /// <returns> The head of the copied list</returns>
    public RandomListNode CopyRandomList(RandomListNode head) {
        // Dir of Nodes and Nodes. Key<Random Node>:Value<Copy of Random Node value> 
        Dictionary<RandomListNode, RandomListNode> map = new Dictionary<RandomListNode, RandomListNode>();
        RandomListNode nHead = head;

        if(head != null) {
            // Build a map of Nodes and node copies
            while(nHead != null) {
                map.Add(nHead, new RandomListNode(nHead.label) );
                nHead = nHead.next;         
            }
            
            // make newHead be the copied random node value
            RandomListNode newHead = map[head];
            // Loop over all key:values in map to update the copied node
            foreach(KeyValuePair<RandomListNode, RandomListNode> pair in map) {
                
                pair.Value.label = pair.Key.label;
                // If the node to copy has a next set next to the copied node otherwise the copy points to null
                pair.Value.next = pair.Key.next != null ? map[pair.Key.next] : null;
                // If the node to copy has a random set random to the copied node otherwise the copy points to null
                pair.Value.random = pair.Key.random != null ? map[pair.Key.random] : null;
            }
            return newHead;

        } else { 
            return null;
        }
        
    }
}