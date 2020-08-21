var orangesRotting = function(grid) {
    
    /*
    first locate the rotten oranges
    
    it will be a queue of rotten oranges
    each element would be an array of cell and num of minutes that passes   [cell, min]
    each iteration is a min
    
    */
    // add rotten oranges into queue
    let freshCount = 0
    let queue = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j, 0])
            } else if (grid[i][j] === 1) {
                freshCount += 1
            }
        }
    }
    function inBounds(row, col) {
        if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) {
            return false
        } else {
            return true
        }
    }
    // bfs
    let maxTime = 0
    let dirs = [[0,1],[0,-1],[1,0],[-1,0]]
    while (queue.length) {
        // check 4 sides for fresh oranges, once its added its rotten
        const currentOrange = queue.shift()
        const [row, col, step] = currentOrange
        maxTime = step
        for (let dir of dirs) {
            const [x,y] = dir
            const newRow = x + row
            const newCol = y + col
            if (inBounds(newRow, newCol) && grid[newRow][newCol] === 1) {
                queue.push([newRow, newCol, step + 1])
                grid[newRow][newCol] = 2
                freshCount -= 1
            }
        }
    }
    return freshCount === 0 ? maxTime : -1
};
