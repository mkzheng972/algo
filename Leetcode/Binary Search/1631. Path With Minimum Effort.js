/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
    
    
    /*
    
    binary search + bfs
    time: O(n*m *log10^6) -> O(n*m)
    space: O(n*m *log10^6) -> O(n*m)
    
    ** main takeaway: using binary search to check for the lowest number, representing the max abs diff from numbers 0 to 10^6, as the k limit that can reach a path to target
    
    notes:
    - first use binary search to find a mid value k that would be the max abs diff
    - have a boolean function that returns true or false based on if there is a path that reaches target and max diff does not exceed k 
    - if there is, then return true and move the upper bound limit to equal to the mid value
    - if there isn't then lower bound = mid + 1
    - continue until left < right and left/right would be the minimum effort max abs diff 
    
    left bound is 0
    right bound is 10^6
    
    */
    
    let n = heights.length
    let m = heights[0].length
    
    function inBounds(row, col) {
        if (row < n && row >= 0 && col < m && col >= 0) {
            return true
        } else {
            return false
        }
    }
    
    function canReach(k) {
        
        let queue = [[0,0]]
        let minDiff = Infinity
        let dirs = [[-1,0],[1,0],[0,-1],[0,1]]
        let visited = Array(n).fill(false).map(() => Array(m).fill(false))
        
        while (queue.length > 0) {
            let curr = queue.shift()
            let [row,col] = curr
            visited[row][col] = true
            if (row === n-1 && col === m-1) {
                return true
            }
            
            for (let dir of dirs) {
                let newRow = row + dir[0]
                let newCol = col + dir[1]
                if (inBounds(newRow, newCol) && visited[newRow][newCol] === false) {
                    let currDiff = Math.abs(heights[row][col] - heights[newRow][newCol])
                    if (currDiff <= k) {
                        visited[newRow][newCol] = true
                        queue.push([newRow,newCol])
                    }
                }
            }
        }
        return false
    }
    
    let left = 0
    let right = Math.pow(10,6)
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (canReach(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    
    return left
    
    
    
    /*
    
    Dijkstra's Algorithm via queue + sort (TLE at 15/75)
    time: O(n*m * klog(m*n))
    space: O(n*m)
    
    let n = heights.length
    let m = heights[0].length
    let queue = [[0,0,0]]
    let minDiff = Infinity
    let dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    let visited = Array(n).fill(false).map(() => Array(m).fill(false))
    
    function inBounds(row, col) {
        if (row < n && row >= 0 && col < m && col >= 0) {
            return true
        } else {
            return false
        }
    }
    
    while (queue.length > 0) {
        let curr = queue.shift()
        let [row,col,diff] = curr
        visited[row][col] = true
        if (row === n-1 && col === m-1) {
            minDiff = Math.min(minDiff, diff)
            break;
        }
        for (let dir of dirs) {
            let newRow = row + dir[0]
            let newCol = col + dir[1]
            
            if (inBounds(newRow, newCol) && visited[newRow][newCol] === false) {
                let currDiff = Math.abs(heights[row][col] - heights[newRow][newCol])
                let newDiff = Math.max(diff, currDiff)
                queue.push([newRow,newCol,newDiff])
            }
        }
        queue.sort((a,b) => a[2] - b[2])
    }
    
    return minDiff
    
    */
    
    /*
    
    backtracking: (TLE at 5/75)
    time: O(3^(n*m))
    space: O(n*m)
    
    'there are at most 4 possible directions to explore, but further, the choices are reduced to 3 (since we won't go back to where we come from).'
    
    goal: find the path that uses the lowest energy to get to target
    start (0,0) -> end (n-1,m-1)
    
    thoughts:
    - path direction can be in all 4
    - not limit to only going down and right (ex: 3)
    - the main factor to check is the 'maximum absolute difference in heights'
    - we have to find the path that is the min abs diff in height
    - we shouldn't go to any visited cells
    - need a set to record visited cells
    - dfs thru the grid from start to end
    
    
    
    let n = heights.length
    let m = heights[0].length
    // let res = []
    let minDiff = Infinity
    let dirs = [[-1,0],[1,0],[0,-1],[0,1]]
    
    function inBounds(row, col) {
        if (row < n && row >= 0 && col < m && col >= 0) {
            return true
        } else {
            return false
        }
    }
    
    function dfs(row, col, diff, visited) {
        if (row === n-1 && col === m-1) {
            if (diff < minDiff) {
                minDiff = diff
            }
            return
        }
        
        for (let dir of dirs) {
            let newRow = row + dir[0]
            let newCol = col + dir[1]
            if (inBounds(newRow, newCol) && visited.has(newRow+','+newCol) === false) {
                let currDiff = Math.abs(heights[row][col] - heights[newRow][newCol])
                visited.add(newRow+','+newCol)
                let newDiff = Math.max(diff, currDiff)
                dfs(newRow, newCol, newDiff, visited)
                visited.delete(newRow+','+newCol)
            }
        }
    }
    dfs(0, 0, 0, new Set())
    return minDiff
    */
};
