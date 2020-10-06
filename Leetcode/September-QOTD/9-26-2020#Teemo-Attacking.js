var findPoisonedDuration = function(timeSeries, duration) {
    
    /*
    approach
    find: sum time that enemy is poisoned
    elms in timeSeries is when teemo poisons ashe again
    need to check if time is overlapping
    poision duration does not stack on top of prev poisons
    each time ashe is poisoned the poison resets to start
    
    timeSeries is ascending (sorted)
    */
    
    let totalTime = 0
    for (let i = 0; i < timeSeries.length; i++) {
        let currTime = timeSeries[i]
        let nextTime = timeSeries[i+1]
        let timeEnd = currTime + duration
        if (timeEnd >= nextTime) {
            totalTime += nextTime - currTime
        } else {
            totalTime += duration
        }
    }
    return totalTime
};
