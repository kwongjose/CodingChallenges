class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, newColor: int) -> List[List[int]]:
        originalColor = image[sr][sc]
        self.fill(image, sr, sc, newColor, originalColor)
        return image
        
    def fill(self, image, sr, sc, newColor, originalColor):

        ## if the cell is not the orginalColor return. If it's the new color it has been visited also return
        if image[sr][sc] != originalColor or image[sr][sc] == newColor:
               return
    
        # change the cell to the new color
        image[sr][sc] = newColor
     
        
        # check cell to right
        if self.validCell(sr, sc + 1, image):
            self.fill(image, sr, sc + 1, newColor, originalColor)
        # check cell to left
        if self.validCell(sr, sc - 1, image):
            self.fill(image, sr, sc - 1, newColor, originalColor)
        # check cell below
        if self.validCell(sr + 1, sc, image):
            self.fill(image, sr + 1, sc,  newColor, originalColor)
        #check cell above
        if self.validCell(sr - 1, sc, image):
            self.fill(image, sr - 1, sc,  newColor, originalColor)

    def validCell(self, sr, sc, image):
        return (sr < len(image) and sr >= 0) and (sc >= 0 and sc < len(image[sr]))
        