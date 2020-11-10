function repeatedString(s, n) {

    let len = s.length
    let timesRepeated = Math.floor(n / len)
    let remaining = n % len
    let origCount = 0
    let remainCount = 0
    for (let i = 0; i < len; i++) {
        if (s[i] === 'a') {
            if (i < remaining) {
                remainCount += 1
            }
            origCount += 1
        }
    }
    return origCount * timesRepeated + remainCount
}
