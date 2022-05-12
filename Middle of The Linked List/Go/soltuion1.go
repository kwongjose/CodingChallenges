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
func middleNode(head *ListNode) *ListNode {
	h, _ := helper(head, 1)
	return h
}

func helper(node *ListNode, place int) (*ListNode, int) {
	// if at the end of the list return the node and the length of the list
	if node == nil {
		return node, place - 1
	}

	n, length := helper(node.Next, place+1)

	mid := length/2 + 1
	// if the node is the middle return the current node
	if place-mid == 0 {
		return node, length
	} else { // return the last node that was returned
		return n, length
	}

}
