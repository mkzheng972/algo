var containsNearbyAlmostDuplicate = function(nums, k, t) {
    
    for (let i = 0; i < nums.length; i++) {
        
        let j = i - 1
        while (j >= 0 && i - j <= k) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true
            }
            j -= 1
        }
        j = i + 1
        while (j < nums.length && j - i <= k) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true
            }
            j += 1
        }
    }
    return false
};
