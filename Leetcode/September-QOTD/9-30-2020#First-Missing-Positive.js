var firstMissingPositive = function(nums) {
    
    let arr = [true]
    
    for (let num of nums) {
        arr[num] = true
    }
    for (let i = 1; i < arr.length; i++) {
        if (arr[i]) {
            return i
        }
    }
    return arr.length
};
