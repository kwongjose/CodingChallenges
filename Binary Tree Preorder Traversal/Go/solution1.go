package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func Main() {}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func preorderTraversal(root *TreeNode) []int {
	r := make([]int, 0)
	if root == nil {
		return r
	}
	// visit node
	r = append(r, root.Val)
	// visit left node
	if root.Left != nil {
		rr := preorderTraversal(root.Left)
		r = append(r, rr...)
	}
	// visit right node
	if root.Right != nil {
		ll := preorderTraversal(root.Right)
		r = append(r, ll...)
	}

	return r
}
