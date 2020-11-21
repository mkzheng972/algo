/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {

    /*
    
    dfs
    approach:
    create visited array and fill with 0 (not visited)
    loop M.length as that is number of students
    if student not yet visited,
    then dfs to that student's row
    set visited at student's index to 1
    dfs thru that student's row and check if any cell has a 1
    if cell value is 1 and the new student is not yet visited,
    then repeat dfs to new student's row
    after dfs increase circle count
    
    */
    
    const visited = new Array(M.length).fill(0)
    let count = 0
    
    function dfs(currRow) {
        visited[currRow] = 1
        for (let j = 0; j < M.length; j++) {
            if (M[currRow][j] === 1 && visited[j] === 0) {
                dfs(j)
            }
        }
    }
    
    for (let i = 0; i < M.length; i++) {
        
        if (visited[i] === 0) {     // not yet visited -> means new friend circle
            dfs(i)
            count += 1
        }
    }
    
    return count
};
