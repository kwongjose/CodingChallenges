func rotate(nums []int, k int) {

	// When we rotate the lenght of the list we are at the inital state
	// when this happens we rotate the remainder
	k %= len(nums)

	// reverse the full list
	reverse(nums, 0, len(nums)-1)
	// revsers the first k items
	reverse(nums, 0, k-1)
	// reverse the remaining items
	reverse(nums, k, len(nums)-1)

}

func reverse(nums []int, start, end int) {
	// reverse taking advantage of syntaxi sugar for single line multiline variable assignment
	for start < end {
		nums[start], nums[end] = nums[end], nums[start]
		start++
		end--
	}
}