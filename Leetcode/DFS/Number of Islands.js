/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    /*
    time: o(n*m)
    dfs
    
    goal: find the number of islands 
    
    0 = water
    1 = land
    
    find the number of separated grouped "1"
    
    one approach is to loop thru the grid, 
    once we find a "1", 
    dfs at that 1 to convert all the neighboring land to 2 and add one to count
    
    */
    
    const n = grid.length
    const m = grid[0].length
    let count = 0
    const dirs = [[0,1], [0,-1], [1,0], [-1,0]]
    
    function inBounds(row, col) {
        if (row < n && row >= 0 && col < m && col >= 0) {
            return true
        } else {
            return false
        }
    }
    
    function dfs(row, col) {
        grid[row][col] = 2
        for (let dir of dirs) {
            let [x,y] = dir
            let newRow = x + row
            let newCol = y + col
            if (inBounds(newRow, newCol) && grid[newRow][newCol] === '1') {
                dfs(newRow, newCol)
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                dfs(i,j)
                count += 1
            }
        }
    }
    
    return count
};
