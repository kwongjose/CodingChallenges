package main

func minDeletions(s string) int {
	// Array makes the number of occurrence of the char
	chArray := make([]int, 26)
	// map to make if an frequency has happened
	seen := make(map[int]interface{})

	// Loop over the string. The index of a rune is it's ascii value - a eg: a = 0
	for _, ch := range s {
		chArray[ch-'a']++
	}
	// counter of removals
	dec := 0
	// loop over the ch array
	for _, val := range chArray {
		// if val is 0 we have to remove all occurrence of the rune. If the frequency is in the seen map decrement the value and increment the removal count
		for val > 0 && seen[val] != nil {
			dec++
			val--
		}
		seen[val] = true

	}

	return dec
}
