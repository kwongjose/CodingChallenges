class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<>();
        // row is the level of the triangle with 0 being the first row
        for(int rowNum = 0; rowNum < numRows; rowNum++){
            // Make the next row
            List<Integer> row = new ArrayList<>();
            // Iterate adding values. The length of each row is 1 plus it's level being zero index
            // row 4 is the fifth row is it has 4 + 1 = 5 items
            for(int col = 0; col < rowNum+1; col++){
                // if the col is the first or last item to add it should be 1
                if (col == 0 || col == rowNum) {
                    row.add(1);
                } else {
                    // Get the last row generated
                   List<Integer> prevRow = triangle.get(rowNum-1);
                   // Add the sum of the item at the same col in the previous row and the item before in the previous row
                    row.add(prevRow.get(col-1)+prevRow.get(col));
                }
            }
            // add to list
            triangle.add(row);
        }
        
        return triangle;
    }
}