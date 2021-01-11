var createSortedArray = function(instructions) {
    
    /*
    
    issue with splice / adding num into array
    need to fix^
    perhaps use another binary search
    
    m = instructions
    n = new array of nums
    time: O(m * n * logn)
    space: O(n)
    
    firstly, get the index where the newNum belongs in the new array
    use a map to store the count of the currNum and subtract that value to calculate the number of elements currently on either side of the new index
    increment the numCount later on to update count[currNum]

    */
    
    let sum = 0
    let arr = []
    let count = {}
    
    for (let i = 0; i < instructions.length; i++) {
        let currNum = instructions[i]
        if (count[currNum] === undefined) {
            count[currNum] = 0
        }
        // binary search for where the number belongs in arr
        let low = 0
        let high = arr.length
        while (low < high) {
            let mid = low + Math.floor((high - low) / 2)
            if (arr[mid] > currNum) {
                high = mid
            } else {
                low = mid + 1
            }
        }
        let numCount = count[currNum]
        sum += Math.min(low - numCount, arr.length - low)
        count[currNum] += 1
        arr.splice(low, 0, currNum)
    }
    return sum % (Math.pow(10, 9) + 7)
}
