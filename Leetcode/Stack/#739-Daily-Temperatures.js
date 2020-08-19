var dailyTemperatures = function(T) {
    
    /*
    approach:
    create a stack to keep track of all the past temperatures
    two loops
    
    first loop:
    compare the current temp to temps in the stack if there is any
    once a current temperature is greater than temp in stack
    the value in the output array at the previous temp's index is..
    the current index value - previous temp index value
    
    second loop:
    if there are any undefined values in the output array, set value to 0
    undefined is either -> 
    temp at that index value is the highest temp,
    or later temps that have no higher temps after them
    */
    
    const stack = []
    const output = []
    for (let i = 0; i < T.length; i++) {
        let currTemp = T[i]
        while (currTemp > T[stack[stack.length-1]]) {
            let prevIndex = stack.pop()
            output[prevIndex] = i - prevIndex
        }
        stack.push(i)
    }
    for (let j = 0; j < T.length; j++) {
        if (output[j] === undefined) {
            output[j] = 0
        }
    }
    return output
};
