var carPooling = function(trips, capacity) {
    
    /*
    
    ex1
    Input: trips = [[2,1,5],[3,3,7]], capacity = 4
    Output: false
    
    create a map for end-destination and value is number of people getting off 
    need to sort by start
    */
    
    trips.sort((a,b) => a[1] - b[1])
    
    let startMap = {}
    let endMap = {}
    
    for (let trip of trips) {
        let [num, start, end] = trip
        if (startMap[start] === undefined) {
            startMap[start] = num
        } else {
            startMap[start] += num
        }
        
        if (endMap[end] === undefined) {
            endMap[end] = num
        } else {
            endMap[end] += num
        }
    }
    
    
    let endNum = trips[trips.length-1][1]
    let curr = 0
    for (let i = 0; i <= endNum; i++) {
        if (endMap[i]) {
            curr -= endMap[i]
        }
        if (startMap[i]) {
            curr += startMap[i]
        }
        if (curr > capacity) {
            return false
        }
    }
    return true
};
