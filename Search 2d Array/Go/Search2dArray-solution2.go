func searchMatrix(matrix [][]int, target int) bool {
    
	// Itergate over matrix rows
    for _, val := range matrix {
		// If the target is between the first and last value in row seach the row
        if target <= val[len(val)-1] && target >= val[0]{
            // See if the tartert is larger or smaller than the value in the middle of the row
            midIdx := (len(val)-1) / 2
            midVal := val[midIdx]
			// if the target is smaller or equal to the midVal search from the 1st to the mid value in row
            if target <= midVal {
                if midVal == target {
                    return true
                }
               return search(val, 0, target, midIdx)
            } else { // if it is larger than the midVal search from the middle to the end of the row
               return search(val, midIdx+1, target, len(val))
            }

        }
    }
    
    return false
}

// Search searches the array for the target from the start index to the end index
func search(array []int, start, target, end int) bool {
    for ; start < end; start++ {
        if array[start] == target {
            return true
        }
    }
    
    return false
}