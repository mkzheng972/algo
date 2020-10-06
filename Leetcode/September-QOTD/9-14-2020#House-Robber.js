var rob = function(nums) {
    
//     contact the police if two adjacent houses were broken into on the same night.
//     determine the maximum amount of money you can rob tonight without alerting the police.
//     arr[i] = max(arr[i-1], arr[i-2] + nums[i])
    
    if (nums.length === 0) {
        return 0
    }
    const arr = new Array(nums.length).fill(0)
    arr[0] = nums[0]
    arr[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < nums.length; i++) {
        arr[i] = Math.max(arr[i-1], arr[i-2] + nums[i])
    }
    return arr[nums.length-1]
};
