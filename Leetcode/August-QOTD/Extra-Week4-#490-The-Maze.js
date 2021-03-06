var hasPath = function(maze, start, destination) {
    
    /*
    goal: find out if destination can be reached from starting point
    
    A:
    dfs
    look at all 4 directions
    go to the end of each of the direction via while loop
    conditions for while loop: coords are inside the maze and current coord is not obstacle
    once the loop stops
    we have reached an obstacle and must go back one step
    check if current new position was visited or not
    visited is value of 2
    and dfs into new position
    once you 
    */
    let dirs = [[0,-1],[0,1],[1,0],[-1,0]]
    let n = maze.length
    let m = maze[0].length
    let found = false
    function dfs(position) {
        if (found) {    // return from all call stacks if we already reached destination
            return
        }
        maze[position[0]][position[1]] = 2      // set current position to visited
        if (position[0] === destination[0] && position[1] === destination[1]) {
            found = true
            return
        }
        for (let dir of dirs) {     // dfs towards each direction
            let [x1,y1] = position
            let [dx, dy] = dir
            while (x1 >= 0 && x1 < n && y1 >= 0 && y1 < m && maze[x1][y1] !== 1) {
                x1 += dx
                y1 += dy
            }           // loop towards the end of the direction
            x1 -= dx
            y1 -= dy
            if (maze[x1][y1] === 0) {   // new position not visited yet
                dfs([x1,y1])
            }
        }
    }
    dfs(start)
    return found
};
