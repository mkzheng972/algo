var compareVersion = function(version1, version2) {
    
    /*
    If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.
    
    split both strings by '.'
    compare each number parseInt-ed to remove leading zeros
    if one str ends, continue to treat last value as zero
    
    */
    
    let arr1 = version1.split('.')
    let arr2 = version2.split('.')
    let short = Math.min(arr1.length, arr2.length)
    
    for (let i = 0; i < short; i++) {
        let num1 = parseInt(arr1[i])
        let num2 = parseInt(arr2[i])
        if (num1 > num2) {
            return 1
        } else if (num2 > num1) {
            return -1
        }
    }
    if (arr1.length === short) {
        for (let j = short; j < arr2.length; j++) {
            if (parseInt(arr2[j]) !== 0) {
                return -1
            }
        }
    } else {
        for (let j = short; j < arr1.length; j++) {
            if (parseInt(arr1[j]) !== 0) {
                return 1
            }
        }
    }
    return 0
};
