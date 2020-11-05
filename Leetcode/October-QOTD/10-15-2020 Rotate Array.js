var rotate = function(nums, k) {
    
    let steps = k % nums.length
    let index = nums.length - steps
    let rotateNums = nums.splice(index, k)
    nums.unshift(...rotateNums)
};
