var asteroidCollision = function(asteroids) {
    
    const stack = []
    
    for (let i = 0; i < asteroids.length; i++) {
        let curr = asteroids[i]
        if (stack.length === 0) {
            stack.push(curr)
        } else {
            let last = stack[stack.length-1]
            if (sameDir(curr, last)){
                stack.push(curr)
            } else {
                if (last < 0 && curr > 0) {
                    stack.push(curr)
                } else if (Math.abs(curr) > last) {
                    stack.pop()
                    i -= 1
                } else if (Math.abs(curr) === last) {
                    stack.pop()
                }
            }
        }
    }
    return stack
    
    function sameDir(ast1, ast2) {
        return (ast1 < 0 && ast2 < 0) || (ast1 > 0 && ast2 > 0)
    }
};
