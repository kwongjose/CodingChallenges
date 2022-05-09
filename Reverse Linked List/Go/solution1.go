package main

type ListNode struct {
	Val  int
	Next *ListNode
}

// Recursive solution
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseList(head *ListNode) *ListNode {
	// head is nil or next is nil return the head. Exit condition for recursion.
	if head == nil || head.Next == nil {
		return head
	}
	// recursively call reverseList until the exit condition is hit. The returned node is the new node and last node in list
	nh := reverseList(head.Next)
	// The node after the current node should point to the current node
	head.Next.Next = head
	// The current node will point to nothing until set in the previously called recursive function
	head.Next = nil

	// return the new head
	return nh
}
