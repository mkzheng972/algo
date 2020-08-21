var verticalTraversal = function(root) {

    /*
    A:
    have a hashmap for the node coords
    dfs the nodes and place the val according to the x value
    sort the subarray by asc
    */
    
    const map = {}
    function dfs(node, x, y) {
        if (node === null) {
            return
        }
        if (map[x] === undefined) {
            map[x] = []
        }
        if (map[x][y] === undefined) {
            map[x][y] = [node.val]
        } else {
            map[x][y].push(node.val)
        }
        dfs(node.left,x-1,y+1)
        dfs(node.right,x+1,y+1)
    }
    dfs(root,0,0)
    const arr = []
    for (let key in map) {
        arr.push([parseInt(key), map[key]])
    }
    arr.sort((a,b) => parseInt(a[0])-parseInt(b[0]))
    const output = []
    for (let [key, value] of arr) {
        let newArr = []
        for (let subArr of value) {
            if (subArr !== undefined) {
                if (subArr.length > 1) {
                    subArr.sort((a,b) => a-b)
                }
                newArr.push(...subArr)
            }
        }
        output.push(newArr)
    }
    return output
};
