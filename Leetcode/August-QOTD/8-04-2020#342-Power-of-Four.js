var isPowerOfFour = function(num) {
    
    let remainder = 0
    if (num <= 0) return false
    while (num > 1) {
        remainder = num % 4
        if (remainder > 0) {
            return false
        }
        num /= 4
    }
    return true
};
