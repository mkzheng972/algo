var maxProfit = function(prices) {
    
    /*
    DP
    A:
    
    limitation:
    can only buy and sell once
    
    need to determine what is the low value to buy at..
    and what is the high value to sell at to get max profit
    we know all the prices for each day
    
    steps:
    check for min at each iteration
    profit -> max between existing profit vs. current price - min
    */
    
    if (prices.length === 0) {
        return 0
    }
    let min = Infinity
    let profit = 0
    
    let dp = new Array(prices.length).fill(0)
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        dp[i] = Math.max(profit, prices[i] - min)
    }
    return Math.max(...dp)
    
    /*
    w/o dp array
    
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        profit = Math.max(profit, prices[i] - min)
    }
    return profit
    */
};
