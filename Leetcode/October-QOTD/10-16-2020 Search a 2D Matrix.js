var searchMatrix = function(matrix, target) {
    
    if (matrix.length === 0 || matrix[0].length === 0) {
        return false
    }
    // binary search
    const firstColumn = matrix.map(row => row[0])

    let row = binarySearch(firstColumn, target)
    if (row < 0) return false
    let column = binarySearch(matrix[row], target)
    
    return matrix[row][column] === target
    
    function binarySearch(arr, target) {
        let left = 0
        let right = arr.length
        while (left < right) {
            const mid = left + Math.floor((right-left) / 2)
            if (target === arr[mid]) {
                return mid
            } else if (target < arr[mid]) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return right - 1
    }
};
