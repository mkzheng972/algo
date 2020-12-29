/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function(board, click) {
    
    /*
    dfs
    
    time: o(m*n)
    space: o(m*n)
    
    M -> unrevealed mine
    E -> unrevealed empty sq
    B -> revealed blank sq
    1-8 -> revealed adj min sq
    X -> revealed mine
    
    A:
    seems like there is only one click
    depending on click:
    - if click is mine -> just change M to X, and return
    - if click is blank sq w/ no adj -> dfs to all squares with no mines as neighbors, if blank sq as well -> change to B, else -> change to num
    - if click is blank sq w/ adj mines -> only need to change cell value to number of surrounding mines
    
    functions required: 
    - helper function to check how many mines surround current cell, expect to return a number
    if number is 0, change cell to B and continue dfs, else change cell value to the number
    - inBounds func
    - dfs func
    
    */
    
    let n = board.length
    let m = board[0].length
    let [x,y] = click
    
    function getMineCount(row, col) {
        
        let minRow = row > 0 ? row - 1 : 0
        let maxRow = row < n-1 ? row + 1 : n-1
        let minCol = col > 0 ? col - 1 : 0
        let maxCol = col < m-1 ? col + 1: m-1
        let count = 0
        for (let i = minRow; i <= maxRow; i++) {
            for (let j = minCol; j <= maxCol; j++) {
                if (board[i][j] === 'M') {
                    count += 1
                }
            }
        }
        return count
    }
    
    function inBounds(row, col) {
        if (row < n && row >= 0 && col < m && col >= 0) {
            return true
        } else {
            return false
        }
    }
    
    const dirs = [[1,0], [0,1], [-1,0], [0,-1], [1,1], [-1,-1], [1,-1], [-1,1]]
    
    function dfs(row, col) {
        
        let mineCount = getMineCount(row, col)
        // blank square, keep dfs
        if (mineCount === 0) {
            board[row][col] = 'B'
            for (let dir of dirs) {
                let newRow = row + dir[0]
                let newCol = col + dir[1]
                if (inBounds(newRow, newCol) && board[newRow][newCol] === 'E') {
                    dfs(newRow, newCol)
                }
            }
        } else {
            board[row][col] = mineCount.toString()
        }
    }
    
    let startCount = getMineCount(x,y)

    // clicked cell is a mine
    if (board[x][y] === 'M') {
        board[x][y] = 'X'
        return board
        // cell is number
    } else if (startCount === 0) {
        
        board[x][y] = 'B'
        dfs(x, y)
    } else {
        board[x][y] = startCount.toString()
    }
    
    return board
};
