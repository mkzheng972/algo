var insert = function(intervals, newInterval) {
    
    /*
    find where the newInterval fits in
    if newInterval[0] < interval[1], merge with current interval
    once above is found.. need to find newInterval[1] < interval[0]
    if above is true then merge in the interval
    seems like a stack question
    Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
    Output: [[1,5],[6,9]]

    add newInterval into the stack
    pop stack each time to compare to current interval
    */
    
    if (intervals.length === 0) {
        return [newInterval]
    }
    let merged = false
    let stack = [newInterval]
    for (let i = 0; i < intervals.length; i++) {
        const curr = intervals[i]
        const prev = stack.pop()
        if (curr[1] < prev[0]) {
            stack.push(curr)
            stack.push(prev)
        } else if (prev[1] < curr[0]) {
            stack.push(prev)
            stack.push(curr)
        } else {    // intersect -> merge
            let front = Math.min(curr[0], prev[0])
            let back = Math.max(curr[1], prev[1])
            stack.push([front, back])
        }
    }
    return stack
};
