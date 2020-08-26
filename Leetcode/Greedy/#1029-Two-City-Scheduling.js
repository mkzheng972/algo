var twoCitySchedCost = function(costs) {
    
    /*
    
    A:
    need to sort the input array
    
    add min cost of going to A
    then find going to B
    
    trick to this problem is to find how to sort the input array
    we can compare the cost of A city to B city..
    and take the difference as the value to sort
    
    loop thru the array to get the costs
    initially start out by getting only one city
    at the half way point we switch to add the cost of traveling to the other city
    
    js.sort(a,b) func -> result: -1 keeps a before b
                               -> 1 b gets placed before a
    E:
    [[10,20],[30,200],[400,50],[30,20]]
        -10.     -170.    350.    10
    sorted:
    [ [ 30, 200 ], [ 10, 20 ], [ 30, 20 ], [ 400, 50 ] ]
        -170            -10         10          350
    */
    
    costs.sort((a,b) => (a[0]-a[1]) - (b[0]-b[1]))
    let sum = 0
    for (let i = 0; i < costs.length; i++) {
        if (i < costs.length/2) {       // switch
            sum += costs[i][0]
        } else {
            sum += costs[i][1]
        }
    }
    return sum
};
