var mincostTickets = function(days, costs) {
    
    /*
    intuition:
    min of (total + oneDayCost, [total - 7 days] + 7dayCost, [total - 30days] + 30daycost)
    
    A:
    create an array of size of the lastDay (largest day) to store the cost on that index day
    start from i = 1 and loop until lastDay
    set an index pointer for days array
    if i equals to the day in days array
    increment days index pointer
    check for the min of oneDayCost, oneWeekCost, oneMonthCost via above condition
    if i does not equal then set dp[i] equal to the previous day
    
    need to account for dp[i-7] and dp[i-30] equaling to undefined or NaN
    
    no need to days.sort since input is given in asc order
    */
    
    // days.sort((a,b) => a-b)
    const n = days.length
    const lastDay = days[n-1]
    let dp = new Array(lastDay+1)
    dp[0] = 0
    let j = 0
    for (let i = 1; i <= lastDay; i++) {
        if (i === days[j]) {
            // const oneDayCost = dp[i-1] + costs[0]
            // const oneWeekCost = dp[i-7] ? dp[i-7] + costs[1] : costs[1]
            // const oneMonthCost = dp[i-30] ? dp[i-30] + costs[2] : costs[2]
            // dp[i] = Math.min(oneDayCost, oneWeekCost, oneMonthCost)
            dp[i] = Math.min(dp[i-1] + costs[0], dp[Math.max(i-7, 0)] + costs[1], dp[Math.max(i-30,0)] + costs[2])
            j += 1
        } else {
            dp[i] = dp[i-1]
        }
    }
    return dp[lastDay]
};
