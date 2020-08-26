var lastStoneWeight = function(stones) {
    
    /*
    Each turn, we choose the two heaviest stones and smash them together
    
    x <= y
    If x == y, both stones are totally destroyed
    If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x
    
    At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)
    
    [2,7,4,1,8,1]
    
    intuition
    sort the array to get max as first time values
    or loop to get firstmax and secondmax
    
    */
    
    while (stones.length > 1) {
        stones.sort((a,b) => a-b)
        let firstStone = stones.pop()
        let secondStone = stones.pop()
        let diff = firstStone - secondStone
        if (diff > 0) {
            stones.push(diff)
        }
    }
    if (stones.length) {
        return stones[0]
    } else {
        return 0
    }
};
