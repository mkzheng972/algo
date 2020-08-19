var distributeCandies = function(candies, num_people) {
    
    /*
    goal: return an array of candies for each index
    
    R: starting at 1 candy, each index gets i + 1 until candies are all given out
    A: while loop until candies is 0 or less
    
    */
    let n = num_people
    let output = new Array(n).fill(0)
    
    let count = 1
    while (candies > 0) {
        let i = 0
        while (candies > 0 && i < n) {
            output[i] += Math.min(count, candies)
            candies -= count
            count += 1
            i += 1
        }
    }
    return output
};
