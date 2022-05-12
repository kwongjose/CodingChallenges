package main

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func middleNodeFastSlow(head *ListNode) *ListNode {
	// track a slow and fast node
	// slow advances one at a time
	// fast advances 2 nodes at a time
	slow, fast := head, head.Next

	// traverse the list until fast is either at the last node or past the last node
	for fast != nil && fast.Next != nil {
		// Advance both nodes as noted above
		slow = slow.Next
		fast = fast.Next.Next
	}
	// return the slow node
	return slow
}
