/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    
    /*
    stack
    
    time: o(n)
    space: o(n)
    
    two stacks: number stack + str stack
    
    need to check if current character s[i] is:
    number
    letter
    open bracket
    close bracket
    
    numbers can be multiple digits, so use numbers as strings to concatenate
    once we see an open bracket, push in the current number string and current string into their respective stacks
    if we see a closed bracket, we pop once from both stacks and concatenate on to currentStr.repeated(poppedNumber of times)
    use isNaN to check for if current elm is a digit
    
    */
    
    let numStack = []
    let strStack = []
    let n = s.length
    let currNum = ''
    let currStr = ''
    for (let i = 0; i < n; i++) {
        
        let curr = s[i]
        if (curr === '[') {

            // push and reset num
            numStack.push(currNum)
            currNum = ''

            // push and reset str
            strStack.push(currStr)
            currStr = ''
        } else if (curr === ']') {
            let num = numStack.pop()
            let prevStr = strStack.pop()
            
            currStr = prevStr + (currStr).repeat(parseInt(num))
        } else if (isNaN(curr) === false) {
            currNum += curr
        } else {
            currStr += curr
        }
    }
    
    return currStr
};
