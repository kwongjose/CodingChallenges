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
func postorderTraversal(root *TreeNode) []int {
	result := make([]int, 0)

	if root == nil {
		return result
	}

	if root.Left != nil {
		arr := postorderTraversal(root.Left)
		result = append(result, arr...)
	}
	if root.Right != nil {
		arr := postorderTraversal(root.Right)
		result = append(result, arr...)
	}

	result = append(result, root.Val)

	return result
}
