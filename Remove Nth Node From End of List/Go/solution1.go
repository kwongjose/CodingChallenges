package main

type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	// if it's a list  of one return nil
	if head.Next == nil {
		return nil
	}

	h, _ := helper(head, 1, n-1)
	return h
}

// helper takes a node and it's place in the list as well as the node away from the end to remove - 1
// returns a node and the length of the list
func helper(node *ListNode, n_place, n_remove int) (*ListNode, int) {

	// if node is nil the last node was the end of the list
	// return the node and the length
	if node == nil {
		return node, n_place - 1
	}
	// recursively traverse the list. Incrementing n_place to track the Next node's place in the list
	n, length := helper(node.Next, n_place+1, n_remove)
	// if the node place in the list subtracted from the length of the lists is 0 this is the one to remove
	// return the current nodes next
	if length-n_place == n_remove {
		return node.Next, length
	}
	// assign the current node to point to the last node returned. [ node.Next, node.Next.Next ]
	node.Next = n

	return node, length
}
