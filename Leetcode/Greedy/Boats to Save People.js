/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    
    
    /*
    greedy - two pointers
    n = people.length
    time: O(n*logn + n)
    space: O(1)
    
    notes:
    - try a greedy approach that sorts the people array ASC
    - have two pointers, one in the front, other in the back
    - first check if back elm can fit into limit,
    - then check if front elm can, else, don't increment front pointer and reset current weight
    - increment number of boats needed when over the limit
    
    - **ship only fits 2 people
    - therefore, only 2 options on ship -> big && small, big only
    - big peope[i] will always be on the ship
    
    eg:
    [3,5,3,4], limit = 5
    after sort..
    
    left = 0
    right = n-1
    [3,3,4,5] limit = 5

    */
    
    people.sort((a,b) => a-b)
    let numBoats = 0;
    let left = 0;
    let right = people.length - 1;
    
    while (left <= right) {
        
        let bigNum = people[right]
        let smallNum = people[left]
        
        // only one person left
        if (left === right) {
            numBoats += 1;
            break;
        }
        
        // big and small both fit onto ship
        if (bigNum + smallNum <= limit) {
            left += 1;
            right -= 1;
        } else {
            right -= 1;
        }
        numBoats += 1;
    }
    
    return numBoats
};
