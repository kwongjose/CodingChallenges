class Solution {
    /**
     * Build a new row in place
     * @param rowIndex
     * @return
     */
    public List<Integer> getRow(int rowIndex) {
        List<Integer> result = new ArrayList<Integer>();

               
        // each new row adds a new 1 to the end
        for(int i = 0; i <= rowIndex; i++) {
            result.add(1);
            // itinerate from the end of the list using the previous value and the current value to get the correct value for the new row
            for(int r = result.size()-2; r >= 1; r--) {
                result.set(r, result.get(r) + result.get(r-1));
            }
        }
        
        
        return result;
    }
}
    