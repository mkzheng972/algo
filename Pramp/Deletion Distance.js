function deletionDistance(str1, str2) {
  // your code goes here
  
  /*
  
  looks to be dp question
  
  difference would be comparing top, top-left, and left
  if the letters match, then dp[i][j] = dp[top-left]
  if the current two letters do not match then its smallest of top and left
  dp table length is str1.length + 1 x str2.length + 1
  
  time: n * m
  space: n * m
  */
  
  const dp = new Array(str1.length + 1).fill(0).map(() => new Array(str2.length + 1).fill(0))
  const n = str1.length
  const m = str2.length
  
  if (str1.length === 0 || str2.length === 0) {
    return Math.max(str1.length, str2.length)
  }
  
  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      
      let char1 = str1[i-1]
      let char2 = str2[j-1]
      if (i === 0) {
        dp[i][j] = j
      } else if (j === 0) {
        dp[i][j] = i
      } else if (char1 === char2) {
        dp[i][j] = dp[i-1][j-1]
      } else {
        dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + 1
      }
    }
  }
  
  return dp[n][m]
}
