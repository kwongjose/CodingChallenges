## USING PYTHON#
class Solution:
    def generate(self, numRows: int) -> List[List[int]]:
        # make the triangle
        triangle = []
        # iterate over rows
        for rowNum in range(numRows):
            row = []
            # iterate over items in row
            for col in range(rowNum+1):
                # first and last item are always 1
                if col == 0 or col == rowNum:
                    row.append(1)
                else: # set the value to the sum of previous row's same index and previous index
                    preRow = triangle[rowNum-1]
                    row.append(preRow[col-1]+preRow[col])
            # add the row to the triangle
            triangle.append(row)
        return triangle