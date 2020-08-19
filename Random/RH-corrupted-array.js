
/*

repeat:

You HAD an array A of length N, 
it contains integer numbers with no repetitions

currently, you have a list of all the pairs of numbers that were next to each other in array A
we are given pairs -> an array of n-1 elements length
each pair is 2-element array in the form of 
[a[j], a[j+1]] or [a[j+1], a[j]]

goal: return original array A 

example: pairs = [[3,5], [1,4], [2,4], [1,5]]
output : [3, 5, 1, 4, 2]
[2,4,1,5,3]

numbers that appear only once are on either ends of the array
create an adj list (?)
or hashmap that stores the count of the appearance of the numbers
and also need the neighbors of the current number

maybe each hashkey can have a set and check if the number already exists to prevent repeats ? hmmm nvm

traverse from one end (num) to the other end num
need a visited set

1. create adjlist for each num to get neighbors
2. create counter as well for count of appearance of each num
3. find an end point and start the dfs at that num
4. dfs thru each num until you reached the next end point
*/

function makeArr(pairs) {
  const map = {}    // adj lsit
  const counter = {}    // counter
  for (let pair of pairs) {
    let [node1, node2] = pair
    counter[node1] = counter[node1] + 1 || 1
    counter[node2] = counter[node2] + 1 || 1

    if (map[node1] === undefined) {
      map[node1] = []
    }
    if (map[node2] === undefined) {
      map[node2] = []
    }
    map[node1].push(node2)
    map[node2].push(node1)
  }

  // find an end point, either one is fine
  let startVal = null
  for (let key in counter) {
    if (counter[key] === 1) {
      startVal = key
      break;
    }
  }
  const visited = new Set()
  const output = []
  function dfs (node) {
    output.push(node)
    visited.add(node)
    for (let num of map[node]) {  // if its not visited yet dfs it
      if (!visited.has(num)) {
        visited.add(num)
        dfs(num)
      }
    }
  }

  dfs(parseInt(startVal))
  console.log(output)
}

pairs = [[3,5], [1,4], [2,4], [1,5]]
pairs1 = [[2,5],[5,3],[4,1],[1,3],[2,6]]
makeArr(pairs1)
