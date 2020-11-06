var splitArray = function(nums, m) {
    
    /*
    goal: find the min largest num after the array is split into m subarrays
    
    binary search
    left -> max(nums)
    right -> sum(nums)
    the binary search range would be to find the num that fulfills:
    smallest num, that is divided within m times
    */
    
    function canDivide(max) {
        
        let count = 1
        let total = 0
        for (let num of nums) {
            total += num
            if (total > max) {
                total = num
                count += 1
                if (count > m) {
                    return false
                }
            }
        }
        return true
    }
    
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    let left = Math.max(...nums)
    let right = sum
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2)
        if (canDivide(mid)) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};
