var maxProfit = function(prices) {
    
    /*
    Greedy
    
    A:
    
    only need to calculate max profit IF we did buy
    would only buy if price of current day is greater than previous day's
    the profit would be the difference in price
    
    no need to track other state changes
    */
    let profit = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1]
        }
    }
    return profit
};
