var maxProfit = function(prices) {
    
    let min = Infinity
    let best = 0
    for (let price of prices) {
        if (price < min) {
            min = price
        }
        best = Math.max(best, price - min)
    }
    return best
};
