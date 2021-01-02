function removeIslands(matrix) {
  // Write your code here.
	
	/*
	
  time: o(n * m)
  space: o(n * m) -- worst case call stack space
	find all the non-island lands (1) first and change the cell value to 2 via dfs
	traverse the matrix and change the rest of the 1s (island lands) to 0
	and change back the non-island lands (now 2) back to 1
	
	*/
	
	let n = matrix.length
	let m = matrix[0].length
	
	const dirs = [[0,1],[0,-1],[1,0],[-1,0]]
	
	function inBounds(row, col) {
		if (row < n && row >= 0 && col < m && col >= 0) {
			return true
		} else {
			return false
		}
	}
	
	function nonIslands(row, col) {
		
		matrix[row][col] = 2
		for (let dir of dirs) {
			let newRow = row + dir[0]
			let newCol = col + dir[1]
			if (inBounds(newRow, newCol) && matrix[newRow][newCol] === 1) {
				nonIslands(newRow, newCol)
			}
		}
	}
	
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if ((i === 0 || j === 0 || i === n-1 || j === m-1) && (matrix[i][j] === 1)) {
				nonIslands(i, j)
			}
		}
	}
	
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (matrix[i][j] === 1) {
				matrix[i][j] = 0
			} else if (matrix[i][j] === 2) {
				matrix[i][j] = 1
			}
		}
	}
	
	return matrix
}

// Do not edit the line below.
exports.removeIslands = removeIslands;
