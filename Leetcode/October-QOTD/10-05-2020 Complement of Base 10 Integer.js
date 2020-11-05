var bitwiseComplement = function(N) {

    let str = N.toString(2)     // convert to binary string
    let arr = []                // build new str reverse
    for (let char of str) {
        if (char === '1') {
            arr.push('0')
        } else {
            arr.push('1')
        }
    }
    let newStr = arr.join('')   
    return parseInt(newStr, 2)  // convert binary string to number
};
