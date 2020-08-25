var maxNumberOfApples = function(arr) {
    
    /*
    R:
    basket carry 5000 units
    arr[i] i the weight of the apple
    
    A:
    sort from small to large
    and add until total weight is greater than 5000
    */
    
    arr.sort((a,b) => a-b)
    let count = 0
    let weight = 0
    for (let num of arr) {
        weight += num
        if (weight > 5000) {
            break;
        }
        count += 1
    }
    return count
};
