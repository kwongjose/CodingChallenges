class Solution {
    /**
     * Brute force solution where we build the full triangle and return the correct row
     * @param rowIndex
     * @return
     */
    public List<Integer> getRow(int rowIndex) {
        List<Integer> result = new ArrayList<Integer>();
        result.add(1);
               
        // build the number of rows and return the last one
        for(int i = 0; i < rowIndex; i++) {
            System.out.println(result);
            result = makeRow(result);
        }
        
        
        return result;
    }
    // The use the lastRow to build the next row
    public List<Integer> makeRow(List<Integer> lastRow) {
        List<Integer> result = new ArrayList<Integer>();
        for(int i = 0; i <= lastRow.size(); i++) {
            if(i == 0 || i == lastRow.size()) {
                result.add(1);
            } else {
                result.add(lastRow.get(i) + lastRow.get(i-1));
            }
        }
        
        return result;
    }
}