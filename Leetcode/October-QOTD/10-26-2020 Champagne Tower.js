var champagneTower = function(poured, query_row, query_glass) {
    
    let matrix = new Array(100).fill(0).map(() => new Array(100).fill(0))
    
    matrix[0][0] = poured
    for (let i = 0; i < query_row; i++) {
        for (let j = 0; j <= i; j++) {
            let q = (matrix[i][j] - 1) / 2
            if (q > 0) {
                matrix[i+1][j] += q
                matrix[i+1][j+1] += q
            }
        }
    }
    return Math.min(1, matrix[query_row][query_glass])
};
