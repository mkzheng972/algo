var maxDistToClosest = function(seats) {
    
    
    /*
    two loops, forwards and backwards
    have another array to store distance
    if seats[i] === 1, reset distance variable to 0
    if seats[i] === 0, increment distance 
    
    */
    
    let arr = new Array(seats.length).fill(Infinity)
    let distance = 1
    let seatFound = false
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1) {
            seatFound = true
            distance = 1
            arr[i] = 0
        } else if (seatFound) {
            arr[i] = distance
            distance += 1
        }
    }
    
    seatFound = false
    for (let j = seats.length-1; j >= 0; j--) {
        if (seats[j] === 1) {
            seatFound = true
            distance = 1
            arr[j] = 0
        } else if (seatFound) {
            arr[j] = Math.min(arr[j], distance)
            distance += 1
        }
    }
    return Math.max(...arr)
};
