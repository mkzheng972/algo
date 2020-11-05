var removeCoveredIntervals = function(intervals) {
    
    intervals.sort((a,b) => a[0]-b[0] || a[1]-b[1])
    
    let count = 1
    let i = 0
    let j = 1
    while (i < intervals.length-1 && j < intervals.length) {
        let arr1 = intervals[i]
        let arr2 = intervals[j]
        if (arr1[0] === arr2[0]) {
            i += 1
            j += 1
        } else if (arr1[1] >= arr2[1]) {
            j += 1
        } else {
            count += 1
            i = j
            j += 1
        }
    }
    return count
};
