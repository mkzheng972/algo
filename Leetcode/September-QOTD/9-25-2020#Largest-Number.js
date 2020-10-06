var largestNumber = function(nums) {
    
    /*
    approach
    sort by ab ba
    time: o(nlogn)
    */
    nums.sort((a,b) => {
        let ab = a.toString() + b.toString()
        let ba = b.toString() + a.toString()
        return ba - ab
    })
    let joined = nums.join('')
    if (parseInt(joined) === 0) {
        return "0"
    } else {
        return joined
    }
};
