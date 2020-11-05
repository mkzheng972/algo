var find132pattern = function(nums) {
    
    let min = Infinity
    for (let i = 0; i < nums.length; i++) {
        min = Math.min(min, nums[i])
        if (min === nums[i]) {
            continue
        }
        for (let j = nums.length-1; j > i; j--) {
            if (min < nums[j] && nums[j] < nums[i]) {
                return true
            }
        }
    }
    return false
};
