var numSubarrayProductLessThanK = function(nums, k) {
    
    if (k === 0) {
        return 0
    }

    let count = 0
    let total = 1
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        total *= nums[i]
        while (j <= i && total >= k) {
            total /= nums[j]
            j += 1
        }
        count += i - j + 1
    }
    return count
};
