/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(grid) {
    
    /*
    array 
    time: o(n * m)
    n = grid.length
    m = grid[0].length
    
    thoughts: 
    need to check box (3x3) 0-2, 3-5, 6-8
    column and row
    if we hit a number, need to run all 3 checks
    
    */
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            let num = grid[i][j]
            if (num !== '.') {
                if (!checkBox(num,i,j) || !checkColumn(num, j) || !checkRow(num, i)) {
                    return false
                }
            }
        }
    }
    return true
    
    function checkColumn(num, col) {
        let count = 0
        for (let i = 0; i < 9; i++) {
            if (grid[i][col] === num) {
                count += 1
            }
            if (count > 1) {
                return false
            }
        }
        return true
    }
    
    function checkRow(num, row) {
        let count = 0
        for (let i = 0; i < 9 ; i++) {
            if (grid[row][i] === num) {
                count += 1
            }
            if (count > 1) {
                return false
            }
        }
        return true
    }
    
    function checkBox(num, row, col) {
        
        let minRow = row - (row % 3) 
        let minCol = col - (col % 3)
        
        let count = 0
        for (let i = minRow; i < minRow + 3; i++) {
            for (let j = minCol; j < minCol + 3; j++) {
                if (grid[i][j] === num) {
                    count += 1
                }
                if (count > 1) {
                    return false
                }
            }
        }
        return true
    }
};
