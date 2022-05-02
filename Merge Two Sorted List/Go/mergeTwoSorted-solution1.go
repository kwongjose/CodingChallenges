/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
	// if list1 or list2 is emptry return the other list
	if list1 == nil {
		return list2
	}
	if list2 == nil {
		return list1
	}

	// The head of our sorted list
	var head *ListNode
	// A runner node to track our place as we build the sorted list
	var runner *ListNode
	// Find the smallest value between the two heads of list1 & list2. Advance the list who's head is used
	if list1.Val > list2.Val {
		head = list2
		list2 = list2.Next
	} else {
		head = list1
		list1 = list1.Next
	}
	// Assign the runner to the head of our sorted list
	runner = head

	for runner != nil {
		// if both list are nil break since we have visited every node
		if list1 == nil && list2 == nil {
			break
		}

		// If one list is empty and the other is not add the remainder to runner and break
		if list1 == nil && list2 != nil {
			runner.Next = list2
			break
		}
		if list2 == nil && list1 != nil {
			runner.Next = list1
			break
		}

		// If both list are not nil the next node is whichever value is smaller. Advance the list that is used
		if list1 != nil && list2 != nil {
			if list1.Val < list2.Val {
				runner.Next = list1
				list1 = list1.Next
			} else {
				runner.Next = list2
				list2 = list2.Next
			}
		}

		// Advance the runner to the next node
		runner = runner.Next
	}

	// Return the head Node
	return head
}