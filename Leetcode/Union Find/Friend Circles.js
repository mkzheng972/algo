/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    
    /*
    
    union find
    time: o(n*m)
    
    approach:
    create unionfind class
    then loop thru the matrix, and if cell is 1, union the row and col
    loop thru the unionfind object and find the parent of all the nodes

    */
    class UnionFind {
        constructor(N) {
            this.parent = new Array(N).fill(0).map((e, index) => index)
            // can be replaced with [...new Array(N).keys()]
            // .keys() -> Iterator object that contains the keys for each INDEX in the array.

        }
        find(student) {     // path compression by resetting this.parent[student]
            if (this.parent[student] !== student) {
                this.parent[student] = this.find(this.parent[student])  
            }
            return this.parent[student]
        }
        union(studentA, studentB) {
            this.parent[this.find(studentA)] = this.find(studentB)
        }
    }
    
    let output = 0
    const unionFind = new UnionFind(M.length)
    for (let i = 0; i < M.length; i++) {        // union node if a connection exists
        for (let j = 0; j < M[0].length; j++) {
            if (M[i][j] === 1) {
                unionFind.union(i, j)
            }
        }
    }
    
    for (let i = 0; i < M.length; i++) {    // find and reset each node's parent
        unionFind.find(i)
    }
    
    return new Set(unionFind.parent).size
};
