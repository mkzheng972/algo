var isRobotBounded = function(instructions) {
    
    /*
    
    if movement = 0 or degrees !== 0 -> there is a cycle
    
    G = 1 movement
    L = -90
    R = +90
    if degree sum reaches or passes -360/+360
    */
    
    let degrees = 0
    let move = 0
    let reverse = false
    for (let char of instructions) {
        if (char === 'L') {
            degrees -= 90
        }
        if (char === 'R') {
            degrees += 90
        }
        if (Math.abs(degrees) === 360) {
            degrees = 0
        }
        if (char === 'G') {
            if (Math.abs(degrees) >= 180) {
                move -= 1
            } else {
                move += 1
            }
        }
    }
    if (degrees !== 0 || move === 0) {
        return true
    }
    return false
};
