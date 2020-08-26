var maxCoins = function(piles) {
    
    /*
    Greedy it seems
    Return the maximum number of coins which you can have.
    
    Alice will pick the pile with the maximum number of coins.  A
    You will pick the next pile with maximum number of coins.   B
    Bob will pick the last pile.    C
    Repeat until there are no more piles of coins.
    
    at each pile, pick the top 2 numbers and the lowest number
    
    [9,8,7,6,5,1,2,3,4]
    
    9,8,1  7,6,2, 5,4,3     -> 8 + 6 + 4 -> 18
    b: 1 2 3
    always give bob the smallest pile
    alice always picks the largest
    */
    
    piles.sort((a,b) => b-a)
    let total = piles.length / 3
    let count = 0
    let i = 1
    let sum = 0
    while (count !== total) {
        sum += piles[i]
        i += 2
        count += 1
    }
    return sum

};
