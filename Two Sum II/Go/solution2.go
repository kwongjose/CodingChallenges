package main

func twoSum(numbers []int, target int) []int {
	// Get the index for the first and last values
	left, right := 0, len(numbers)-1
	var sum int
	for {
		// if our indexs are the same break
		if left >= right {
			break
		}
		// get the sum of the two index values
		sum = numbers[left] + numbers[right]
		// if the sums match return
		if sum == target {
			break
		}
		// The array is sorted and there is only 1 answer so if the sum is to large the complement value is to the left
		if sum > target {
			right--
		} else { // if the sum is too small increase the index on the left
			left++
		}
	}
	return []int{left + 1, right + 1}
}
