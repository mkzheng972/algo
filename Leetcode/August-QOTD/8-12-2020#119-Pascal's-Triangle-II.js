var getRow = function(rowIndex) {
    /* 
    [   
        [1],
        [1,1],
        [1,3,3,1],
        [1,4,6,4,1]
    ]
    */
    // recursive approach
    
    if (rowIndex === 0) {
        return [1]
    }
    if (rowIndex === 1) {
        return [1,1]
    }
    let arr = [1,1]
    let index = 1
    const helper = (arr, index, rowIndex) => {
        if (index === rowIndex) {
            return arr
        }
        let subArr = []
        for (let i = 0; i <= arr.length; i++) {
            if (i === 0 || i === index) {
                subArr.push(1)
            }
            if (arr[i + 1]) {
                subArr.push(arr[i] + arr[i+1])
            }
        }
        return helper(subArr, index + 1, rowIndex)
    }
    return helper(arr, index, rowIndex)
};
