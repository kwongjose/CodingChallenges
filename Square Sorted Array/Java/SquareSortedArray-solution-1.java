class Solution {
    /**
     * 
     * @param A - Sorted array to square and sort
     * @return Sorted array of square values
     */
    public int[] sortedSquares(int[] A) {
        int[] result = new int[A.length];
        // Right most index not squared
        int right = A.length - 1;
        // Left most index not squared
        int left = 0;
        // loop the length of the array starting from the end
        for(int i = A.length - 1; i >= 0; i--){
            // If the absolute value of left is greater the right insert that in the end of the new array
            // eg: |-5| > 2
            if(Math.abs(A[left]) > A[right]){
                // Insert the squared value and increment left
                result[i] = (int)Math.pow(A[left], 2);
                left++;
            } else {
                // If right is bigger insert it's square and decrement right
                result[i] = (int)Math.pow(A[right], 2);
                right--;
            }
        }
        
        return result;
    }
}