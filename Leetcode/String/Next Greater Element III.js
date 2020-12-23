/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function(n) {
    

    /*
    
    goal -> find the next smallest integer that is greater than currently n, having all the same digits
    
    E:
    
    123654
    124356
    
    1234
    1243
    
    A:
    
    loop from the right, find the first number that is smaller than number to its right (str[i] < str[i+1])
    if that doesn't exist then return -1
    
    then from that first number index, 
    loop from the right again to find the first number that is greater than current number
    swap those two numbers
    
    finally need to flip the numbers between firstIndex and str.length
    
    edge case:
    returned integer should fit 32-bit integer -> [-2147483648 to 2147483647]
    use Math.pow(2,31) - 1
    
    */
    
    let str = n.toString()
    let arr = str.split('')
    let index1 = -1
    
    for (let i = str.length-1; i >= 0; i--) {
        
        if (str[i] < str[i+1]) {
            index1 = i
            break;
        }
    }
    
    // didn't find an index, number is already the highest
    if (index1 === -1) {
        return -1
    }
    
    // look for the first number on the right is that higher than num at index1
    let index2 = -1
    for (let i = str.length-1; i > index1; i--) {
        if (str[i] > str[index1]) {
            index2 = i
            break;
        }
    }
    
    // swap index1 and index2 num
    function swap(i, j) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    swap(index1, index2)
    
    // swap the numbers after index1
    let left = index1+1
    let right = str.length-1
    while (left < right) {
        swap(left, right)
        left += 1
        right -= 1
    }

    // limit of 32-bit integer -> [-2147483648 to 2147483647]
    const limit = Math.pow(2, 31) - 1
    const res = parseInt(arr.join(''))

    return res > limit ? -1 : res
};
