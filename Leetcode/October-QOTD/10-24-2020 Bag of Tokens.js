var bagOfTokensScore = function(tokens, P) {
    
    tokens.sort((a,b) => a-b)
    let score = 0
    let points = 0
    let low = 0
    let high = tokens.length - 1
    while (low <= high) {
        if (P >= tokens[low]) {
            P -= tokens[low]
            low += 1
            score = Math.max(score, points + 1)
            points += 1
        } else if (points > 0) {
            points -= 1
            P += tokens[high]
            high -= 1
        } else {
            break
        }
    }
    return score
};
