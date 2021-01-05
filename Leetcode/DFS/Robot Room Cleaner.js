/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 * 
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void} 
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function(robot) {
    
    /*
    
    4 APIs
    - move()    -> return true if cell is free, returns false if its blocked
    - turnLeft()
    - turnRight()
    - clean()
    
    notes: 
    - need to solve this question without knowing the layout of the room
    - robot will always start at open cell
    - all open cells connect
    - robot is initially facing up
    - we do not know the room layout and initial starting position
    
    
    A:
    
    need to move robot back to original position after moving to the given position
    
    if moved to new cell -> clean
    check directions and move if true
    dfs(newRow, newCol, robot, direction)
    we robot to continue in the direction its going until it can't anymore
    if the robot can't anymore, then turn right
    to backtrack out of the call stack turn the robot around and place it in the original position
    original position -> original cell AND original direction
    
    
    */
    
    let startRow = robot.row
    let startCol = robot.col
    let visited = new Set()
    
    // up, right, down, left
    let dirs = robot.dmap
    
    function dfs(row, col, robot, direction) {
        
        // base case
        let pos = row + '#' + col
        if (robot.needClean <= 0 || visited.has(pos)) {
            return
        }
        
        visited.add(pos)
        robot.clean()
        
        // check all the directions
        for (let i = 0; i < 4; i++) {
            let dir = dirs[i]
            
            // if can move into cell, move into next call stack
            let newRow = row
            let newCol = col
            if (direction === 0) {
                newRow -= 1
            } else if (direction === 1) {
                newCol += 1
            } else if (direction === 2) {
                newRow += 1
            } else if (direction === 3) {
                newCol -= 1
            }
            
            if (robot.move()) {
                dfs(newRow, newCol, robot, direction)
                
                // move robot back when its done
                robot.turnRight()
                robot.turnRight()
                robot.move()
                robot.turnLeft()
                robot.turnLeft()
            }
            robot.turnRight()
            direction += 1
            direction %= 4
        }
    }
    
    dfs(startRow, startCol, robot, 0)
};
