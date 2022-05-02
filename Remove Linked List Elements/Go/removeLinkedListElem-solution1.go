/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeElements(head *ListNode, val int) *ListNode {

	if head == nil {
		return head
	}
	// The current node to look at
	current := head
	// The last node that was kept in the list
	var prev *ListNode
	// loop until all nodes visited
	for current != nil {

		if current.Val == val {
			// prev has not been set the new head is the node after current. Since the current node should be removed and we do not have a node visited that should stay yet
			if prev == nil {
				current = current.Next
				head = current
			} else {
				// If current should be removed and prev is set set prev's next to the next node after current
				// Then advance current
				prev.Next = current.Next
				current = current.Next
			}
		} else {
			// If the current node should stay prev is the current node and advance current
			prev = current
			current = current.Next
		}

	}

	return head
}