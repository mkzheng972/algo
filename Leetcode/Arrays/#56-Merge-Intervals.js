var merge = function(intervals) {
    
    /*
    approach:
    two pointers array
    interval[i] -> [start, end]
    sort by start -> interval[0]
    if next interval's start num is equal to or less than previous's end
    need to find the max end interval between the two: prev and curr
    eg: [1,4], [2,3] --> [1,4]
    */
    
    intervals.sort((a,b) => a[0]-b[0])
    let result = []
    for (let i = 0; i < intervals.length; i++) {
        let currArr = intervals[i]
        let prevArr = result[result.length-1]
        let [start, end] = currArr
        if (i > 0 && prevArr[1] >= start) {    // not first arr
            let endMax = Math.max(prevArr[1], end)
            prevArr[1] = endMax
        } else {
            result.push(currArr)
        }
    }
    return result
};
