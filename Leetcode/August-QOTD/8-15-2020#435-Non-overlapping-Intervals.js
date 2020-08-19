var eraseOverlapIntervals = function(intervals) {
    
    /*
    goal: find the min count of intervals to remove for nonoverlap
    
    [-50, 2] [1, 6] [4, 7] [8, 10]
    */
    
    intervals.sort((a,b) => a[1]-b[1] || b[0]-a[0])
    let endMax = -Infinity
    let count = 0
    for (let interval of intervals) {
        let [start, end] = interval
        if (start >= endMax) {
            endMax = end
        } else {
            count += 1
        }
    }
    return count
};
