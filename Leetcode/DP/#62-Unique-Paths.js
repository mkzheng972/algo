var uniquePaths = function(m, n) {
    
    /*
    dp
    
    A:
    path can only going right or down direction
    each cell value (that is not top edge or left edge) is the sum of top+left
    dp[i] = dp[i][j-1] + dp[i-1][j]
    right-most bottom cell is the answer
    */
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(1))
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
        }
    }
    return dp[m-1][n-1]
};
