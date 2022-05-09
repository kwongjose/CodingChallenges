package main

import (
	"fmt"
	"testing"
)

func TestReverseList(t *testing.T) {
	head := getList()
	result := reverseList(head)
	cnt := 3

	for {

		fmt.Print(result.Val)
		if result.Val != cnt {
			t.Fatalf("Order incorrect")
		}
		cnt--
		if result.Next == nil {
			break
		}
		result = result.Next
	}

}

func getList() *ListNode {
	head := ListNode{
		Val: 1,
	}
	mid := ListNode{
		Val: 2,
	}
	last := ListNode{
		Val: 3,
	}
	head.Next = &mid
	head.Next.Next = &last

	return &head
}
