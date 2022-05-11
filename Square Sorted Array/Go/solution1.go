package main

import "math"

func sortedSquares(nums []int) []int {
	// Get the lenght of the array
	length := len(nums) - 1
	// Make the result array
	result := make([]int, length+1)
	// Variables to track the left and right index of the src to sqr & sort
	left, right := 0, length
	// Loop over until we have inserted every value into the result array
	for idx := length; idx >= 0; idx-- {
		// The absoulte value that is the highest will be inserted  next starting from the end of the array
		if math.Abs(float64(nums[left])) > math.Abs(float64(nums[right])) {
			// squar the value and increment the left side index
			result[idx] = nums[left] * nums[left]
			left++
		} else {
			// square the right side and decrement the right side counter
			result[idx] = nums[right] * nums[right]
			right--
		}
	}

	return result

}
