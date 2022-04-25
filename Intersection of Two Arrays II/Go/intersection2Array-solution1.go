func intersect(nums1 []int, nums2 []int) []int {
	// Make result array
	result := make([]int, 0)
	// Map to count occurrence of numbers
	intMap := make(map[int]interface{}, 0)
	// find the shortest and longers array
	var shorter, longer []int

	if len(nums2) < len(nums1) {
		shorter = nums2
		longer = nums1
	} else {
		shorter = nums1
		longer = nums2
	}

	// Add to the map the number and count the times it shows up in the shorter array
	for _, val := range shorter {
		if ok := intMap[val]; ok != nil {
			cnt := intMap[val].(int) + 1
			intMap[val] = cnt
		} else {
			intMap[val] = 1
		}

	}

	// iterate over the longer array
	for _, val := range longer {
		// Decrement the cnt each time it shows up in the map and add to the result
		if cnt, ok := intMap[val].(int); ok {
			if cnt > 0 {
				intMap[val] = cnt - 1
				result = append(result, val)
			}

		}
	}

	return result
}
    