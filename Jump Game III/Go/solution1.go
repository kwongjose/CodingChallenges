package main

func canReach(arr []int, start int) bool {
	seen := make(map[int]bool)

	return helper(seen, arr, start)
}

func helper(seen map[int]bool, arr []int, idx int) bool {
	// if we have visited the index or we are are zero return
	if seen[idx] {
		return false
	}
	if arr[idx] == 0 {
		return true
	}
	// make that we have visited the index
	seen[idx] = true
	// if the next move is in bounds to the left or right try the move
	if lIdx := idx - arr[idx]; lIdx >= 0 {
		// If we ever get to 0 return true. Else we try to the right
		if found := helper(seen, arr, lIdx); found {
			return true
		}
	}
	if rIdx := idx + arr[idx]; rIdx < len(arr) {
		if found := helper(seen, arr, rIdx); found {
			return true
		}
	}

	return false

}
