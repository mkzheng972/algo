var maxProfit = function(prices) {
    
    /*
    given: prices, array for which the ith element is the price of a given stock on day i
    
    need to: find the maximum profit. You may complete at most two transactions
    
    */
    
    if (prices.length < 2) {
        return 0
    }
    
    let buy1 = -Infinity
    let sell1 = 0
    let buy2 = -Infinity
    let sell2 = 0
    for (let i = 0; i < prices.length; i++) {
        const curr = prices[i]
        buy1 = Math.max(buy1, 0 - curr)
        sell1 = Math.max(sell1, buy1 + curr)
        buy2 = Math.max(buy2, sell1 - curr)
        sell2 = Math.max(sell2, buy2 + curr)
    }
    return Math.max(sell1, sell2)
};
