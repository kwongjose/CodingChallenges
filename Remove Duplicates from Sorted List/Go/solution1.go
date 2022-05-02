package main


type ListNode struct {
	Val int
    Next *ListNode
}

func Main() {

}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func deleteDuplicates(head *ListNode) *ListNode {
	 // If head is nil or has no next simply return head
    if head == nil || head.Next == nil{
        return head
    }
    
	// The last node that was kept
    prev := head
	// Node to track progess though the list
    current := head.Next
    for current != nil {
		// If the value of current is the same as the last kept node
		// skip the current node and advance
        if current.Val == prev.Val {
            prev.Next = current.Next
        } else { // If the value is not the same the last kept node becomes the current node
            prev = current
        }
		current = current.Next
        
    }
    
    return head
}