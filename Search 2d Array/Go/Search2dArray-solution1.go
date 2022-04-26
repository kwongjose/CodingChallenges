func searchMatrix(matrix [][]int, target int) bool {
    // Iterate over matrix rows
    for _, val := range matrix {
		// if the target is between the first and last value in row search the row
        if target >= val[0] && target <= val[len(val)-1]{
            // search val
            for _, val := range val{
                if val == target {
                    return true
                }
            }
        }
    }
    
    return false
}