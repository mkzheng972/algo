/*

A:

- get the running sum of weights at each index
- w[i] represents the chance of that index getting picked out of the sum of the weights 
- need to get a random number from 0 to sum-1
- construct an array that has the running sum and check for the array[i] that is less than random number generated
- we are only looking for one index value, and our array is sorted in increasing sum -> can do binary search

*/

class Solution {
    constructor(w) {
        
        // get the prefix sum at each index
        this.arr = []
        this.sum = 0
        for (let i = 0; i < w.length; i++) {
            this.sum += w[i]
            this.arr.push(this.sum)
        }
    }
    
    pickIndex() {
        
        // get a randomNum between 0 to this.sum-1
        let randomNum = Math.floor(Math.random() * this.sum)
        let left = 0
        let right = this.arr.length-1
        
        // binary search
        while (left < right) {
            let mid = left + Math.floor((right - left) / 2)
            if (randomNum < this.arr[mid]) {
                right = mid
            } else {
                left = mid + 1
            }
        }
        return left
    }
}
