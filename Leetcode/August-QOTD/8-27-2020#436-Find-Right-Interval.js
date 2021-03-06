var findRightInterval = function(intervals) {
    
    /*
    Input: [ [3,4], [2,3], [1,2] ]
    Output: [-1, 0, 1]
    
    in the case of multiple intervals with the same start point, 
    the one that comes first in the input array is the answer
    
    
    A:
    create a map to store the the end of intervals,
    the end num would be the key, and val would be an array of index values
    maybe only store the index val if key is undefined
    
    create an output array to store the min interval j's index
    if it doesn't exist push in -1
    if it does push in the index val at key
    
    can do binary search
    */
    
    const output = []
    const map = {}
    const arr = []
    let highKey = -Infinity
    
    // assign the indexes according to start interval
    for (let i = 0; i < intervals.length; i++) {
        let [start,end] = intervals[i]
        if (map[start] === undefined) {
            map[start] = i
            arr.push([start,i])
        }
        highKey = Math.max(highKey, start)
    }

    arr.sort((a,b) => a[0]-b[0])    // sort the array asc order for binary search
    
    // get index for each interval
    for (let j = 0; j < intervals.length; j++) {
        let [start,end] = intervals[j]
        
        if (map[end] !== undefined) {   // direct end interval match (not necessary)
            output[j] = map[end]
        } else if (end < highKey) {     // higher end interval exists
            let val = binSearch(end)
            output[j] = arr[val][1]
        } else {       // no higher value key exists
            output[j] = -1
        }
    }
    return output
    
    function binSearch(num) {
        // binary search o(logn)
        let low = 0
        let high = arr.length-1
        while (low < high) {
            let mid = low + Math.floor((high - low) / 2)
            if (arr[mid][0] >= num) {
                high = mid
            } else {
                low = mid + 1
            }
        }
        return low
    }
};
