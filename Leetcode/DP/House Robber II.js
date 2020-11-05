var rob = function(nums) {
    
    if (nums.length === 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0]
    }
    let first = nums[0]
    let second = 0
    let third = nums[1]
    let forth = 0
    for (let i = 1; i < nums.length; i++) {
        if (i < nums.length-1) {
            let temp = first
            first = Math.max(first, second + nums[i])
            second = temp
        }
        if (i > 1) {
            let temp2 = third
            third = Math.max(third, forth + nums[i])
            forth = temp2
        }
    }
    
    return Math.max(first, third)
};
