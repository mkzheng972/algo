var openLock = function(deadends, target) {
    
    /*

    goal:
    find the min number of turns (steps) to get to target
    return -1 if its not possible to reach target
    
    start position = '0000'
    
    looks to be a bfs -> since we are looking for min
    direction is either 1 or - 1
    if num reaches 10 -> turn back to 0
    if num reaches -1 -> turn back to 9
    
    need to check if the next num is in deadends or not,
    if it is then don't add that piece into the queue
    
    make a visited set, don't want to revisit combinations
    
    need to check for edge case (ex: '0000' is in deadends)
    
    */
    
    const deadEndSet = new Set(deadends)
    const queue = [[target,0]]
    const dirs = [1,-1]
    const visited = new Set([target])
    
    // starting position is a deadend
    if (deadEndSet.has('0000')) {
        return -1
    }
    
    while (queue.length) {
        const [num,step] = queue.shift()
        const numArr = num.split('')

        // reached target, return steps
        if (num === '0000') {
            return step
        }
    
        for (let i = 0; i < numArr.length; i++) {
            
            // create new array to be modified and pushed into queue
            let copyArr = numArr.slice()
            
            for (let dir of dirs) {
                
                // get newNum
                let newVal = parseInt(numArr[i]) + dir
                if (newVal === 10) {
                    newVal = 0
                } else if (newVal === -1) {
                    newVal = 9
                }
                
                // check if new num is in deadends or visited
                // add to queue
                copyArr[i] = newVal
                const newNum = copyArr.join('')
                if (deadEndSet.has(newNum) || visited.has(newNum)) {
                    continue
                } else {
                    visited.add(newNum)
                    queue.push([newNum, step + 1])
                }
            }
        }
    }
    // didn't reach the end
    return -1
};
