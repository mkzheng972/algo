var findRepeatedDnaSequences = function(s) {
    
    let exists = new Set()
    let output = new Set()

    for (let i = 0; i < s.length-9; i++) {
        let newSeq = s.slice(i, i + 10)
        if (exists.has(newSeq) && !output.has(newSeq)) {
            output.add(newSeq)
        }
        exists.add(newSeq)
    }
    return [...output]
};
