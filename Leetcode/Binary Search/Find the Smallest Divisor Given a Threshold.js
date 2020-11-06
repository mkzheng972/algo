var smallestDivisor = function(nums, threshold) {
    
    /*
    eg: (For example: 7/3 = 3 and 10/2 = 5) = Math.ceil(nums[i] / num)
    
    find the sum of all vals in nums that add up to or least than threshold
    find the smallest divisor that fits requirements
    
    could use binary search ? 
    */
    
    function under(num) {
        let sum = 0
        for (let j = 0; j < nums.length; j++) {
            sum += Math.ceil(nums[j] / num)
        }
        if (sum <= threshold) {
            return true
        } else {
            return false
        }
    }
    
    let output = 0
    let left = 1
    let right = Number.MAX_SAFE_INTEGER
    while (left < right) {
        let mid = left + Math.floor((right-left)/2)
        if (under(mid)) {
            output = mid
            right = mid
        } else {
            left = mid + 1
        }
    }
    
    return output
};
