package main

func findAnagrams(s string, p string) []int {
	// if p is larger than s there are no matches
	if len(p) > len(s) {
		return []int{}
	}
	// create 2 arrays to store frequnecys. there are 26 letters making the array length 26
	sArr := make([]int, 26)
	pArr := make([]int, 26)
	// create an array to store the start index of anagrams
	startIdxs := make([]int, 0)
	// populate the two arrays with the letter frequences from 0 to length p
	pArr = populateArray(pArr, p, len(p))
	sArr = populateArray(sArr, s, len(p))

	// set the bounds of the window
	// high is exclusive
	high := len(p)
	// low is inclusive
	low := 0

	// loop until high is out of bounds of s
	for high <= len(s) {
		// check if the arrays are equal.
		// if they are add the inclusive low index to the result
		if isEqual(sArr, pArr) {
			startIdxs = append(startIdxs, low)
		}
		// if high is out of bounds break
		if high >= len(s) {
			break
		}
		// decrement low as it wont be in the window
		sArr[s[low]-'a']--
		// increment high as it will not be in the window
		sArr[s[high]-'a']++
		// increment both low and high values
		low++
		high++
	}

	return startIdxs
}

// populateArray populates the array witht eh freqeucy of letters from 0 to end of str. Returns the updated array
func populateArray(arr []int, str string, end int) []int {
	for i := 0; i < end; i++ {
		arr[str[i]-'a']++
	}

	return arr
}

// isEquals compares the values in to arrays and returns false if they are not equal
func isEqual(arr1, arr2 []int) bool {
	for i, _ := range arr1 {
		if arr1[i] != arr2[i] {
			return false
		}
	}

	return true
}
