var findPermutation = function(s) {
    
    /*
    stack approach
    I: push in everything from stack into output array
    D: only push current i into stack
    loop until i = n+1 since we are goin from 1 to n+1
    */
    
    let n = s.length
    let stack = []
    let output = []
    let i = 1
    while (i <= n+1) {
        if (s[i-1] === 'I' || i === n+1) {
            if (stack.length === 0) {   // nothing in stack
                output.push(i)
            } else {
                output.push(i)  // add current i to output array first
                while (stack.length) {
                    output.push(stack.pop())
                }
            }
        } else {    // D, do nothing, just push into stack and increment i
            stack.push(i)
        }
        i += 1
    }
    return output
};
