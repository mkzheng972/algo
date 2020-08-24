var minSubsequence = function(nums) {

    /*
    time: n*logn (sort)
    
    A:
    get total sum of all the nums in the input array
    sort the values by desc (large -> small)
    create a new sum to get the running sum in the loop
    and subtract current val from total sum
    at each step push in the num into output array
    if running sum is greater than current total sum..
    stop the loop and return output array
    */
    
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    nums.sort((a,b) => b-a)
    let output = []
    let runningSum = 0
    for (let num of nums) {
        output.push(num)
        runningSum += num
        sum -= num
        if (runningSum > sum) {
            break;
        }
    }
    return output
};
