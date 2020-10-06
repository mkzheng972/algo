var getHint = function(secret, guess) {
    
    let map = {}
    for (let i = 0; i < secret.length; i++) {
        if (map[secret[i]] === undefined) {
            map[secret[i]] = 1
        } else {
            map[secret[i]] += 1
        }
    }
    let bulls = 0
    let cows = 0
    // find bulls first
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] === secret[i]) {
            bulls += 1
            map[guess[i]] -= 1
        }
    }
    // find cows
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] !== secret[i] && map[guess[i]]) {
            cows += 1
            map[guess[i]] -= 1
        }
    }
    return `${bulls}A${cows}B`
};
