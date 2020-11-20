/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    /*
    binary search -- sorted array
    time: O(logn)
    */
    
    // find the real low num in nums array
    const n = nums.length
    let low = 0
    let high = n - 1
    
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2)
        if (nums[mid] > nums[high]) {
            low = mid + 1
        } else {
            high = mid
        }
    }
    
    // use the real low to binary search thru the array again
    let rotateLen = low
    low = 0
    high = n - 1
    
    while (low <= high) {

        let mid = low + Math.floor((high - low) / 2)
        let actualMid = (mid + rotateLen) % n
        if (nums[actualMid] === target) {
            return actualMid
        } else if (nums[actualMid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
    
/* rotateLen explaination by lavender_sz

For those who struggled to figure out why it is realmid=(mid+rot)%n: you can think of it this way:
If we want to find realmid for array [4,5,6,7,0,1,2], you can shift the part before the rotating point to the end of the array (after 2) so that the sorted array is "recovered" from the rotating point but only longer, like this: [4, 5, 6, 7, 0, 1, 2, 4, 5, 6, 7]. The real mid in this longer array is the middle point between the rotating point and the last element: (rot + (hi+rot)) / 2. (hi + rot) is the index of the last element. And of course, this result is larger than the real middle. So you just need to wrap around and get the remainder: ((rot + (hi + rot)) / 2) % n. And this expression is effectively (rot + hi/2) % n, which is (rot+mid) % n.

*/
    
};
