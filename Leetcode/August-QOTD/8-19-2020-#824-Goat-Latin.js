var toGoatLatin = function(S) {
    
    /*
    goal: convert input string to goat latin
    
    goat latin conversion conditions:
    1. first letter is vowel:
        add 'ma' to the end of the word
        For example, the word 'apple' becomes 'applema'.
    2. first letter is consonant:
        remove first letter and add it to the end, also add ma to the end after it
        For example, the word "goat" becomes "oatgma".
    3. finally, add the letter 'a' to the end of each word, for each continuing word, add an extra 'a'
        for example: 'hello world' becomes 'ellohmaa orldwmaaa'
        
    approach:
    create set for vowels
    split the str into array then rejoin the array
    create a counter for the length of 'a' that needs to be added on to end of the word
    1. check first letter of each word for if its vowel or consonant
    2. add 'ma'
    3. add the 'a's at the end
    
    */
    
    let set = new Set(['a','e','i','o','u','A','E','I','O','U'])
    const strArr = S.split(' ')
    let count = 1
    for (let i = 0; i < strArr.length; i++) {
        let word = strArr[i].split('')
        const firstLetter = word[0]
        if (!set.has(firstLetter)) { // consonant
            word.splice(0,1)
            word.push(firstLetter)
        }
        word.push('ma')
        for (let j = 0; j < count; j++) {
            word.push('a')
        }
        strArr[i] = word.join('')
        count += 1
    }
    return strArr.join(' ')
};
