func maxProfit(prices []int) int {
	// bigest profit so far
	profit := 0
	// lowest price seen so far. Set to maxInt so that first value is set
	lowestPrice := math.MaxInt64

	// iterate over the prices
	for _, val := range prices {
		// if the value is less than the lowest price seen so far set update the lowest price
		if val < lowestPrice {
			lowestPrice = val
		}
		// if the profit of selling today is more than the profit we have seen so far update the profit
		if val-lowestPrice > profit {
			profit = val - lowestPrice
		}
	}

	return profit
}