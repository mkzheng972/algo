var sequentialDigits = function(low, high) {
    
    let output = []
    
    for (let i = 1; i <= 9; i++) {
        let currDigit = i
        let num = i
        while (num < high && currDigit < 9) {
            currDigit += 1
            num = num * 10 + currDigit
            if (num <= high && num >= low) {
                output.push(num)
            }
        }
        
    }
    return output.sort((a,b) => a-b)
};
