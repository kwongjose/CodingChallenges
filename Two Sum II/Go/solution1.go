package main

func twoSum(numbers []int, target int) []int {
	// map to track the complemnt value and index
	comp := make(map[int]int)
	// iterate over the list
	for idx, val := range numbers {
		// if the map has the complement value return that and the current index
		if compVal, ok := comp[val]; ok {
			return []int{compVal + 1, idx + 1}
		} else {
			// find the needed number to reach the sum. Add it to the map with the index as the value
			compVal := target - val
			comp[compVal] = idx
		}
	}

	return nil
}
