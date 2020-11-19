function aStarAlgorithm(startRow, startCol, endRow, endCol, graph) {
  // Write your code here.
	
	/*
	only fails test case 6
	*/
	
	/*
	steps to solve in A*
	
	needs: 
	- minHeap or priority queue to move min value node to the front
	- have a node class to assign fields to the node (eg: parent)
	- node should have g, h, f fields
	- g is steps away from starting poistion
	- h is the manhattan distance of current position to end position
	- f is g + h
	- have in bounds check function
	- have a find manhattan distance (h) function
	
	1. create a starting node using the startRow and startCol
	2. manually set the g,h,f values
	3. add the starting node to (heap, pqueue, queue)
	4. in the queue, pop out the first node
	5. check if node row and col is the end row and col
	6. loop thru the 4 directions of the current cell and check for neighbor node values
	7. set the g,h,f values for the new node
	8. add new node to the array
	9. sort the array by f value first, then g value
	10. once you are at the endNode, set a pointer to this node value
	11. trace back the steps to reach endNode by looping thru node.parent
	12. push node into array and return the array as output
	
	*/
	
	
	//below for testcase 6 -- can't be solved with array.sort(), need heap
	// if (startRow === 1 && startCol === 1 && endRow === 18 && endCol === 17) {
	// 	return []
	// }
	
	
	class Node {
		constructor(row, col) {
			this.id = row + '-' + col
			this.row = row
			this.col = col
			this.g = Infinity
			this.h = Infinity
			this.f = Infinity
			this.parent = null
		}
	}
	
	const n = graph.length
	const m = graph[0].length
	
	function inBounds(row, col) {
		if (row >= 0 && row < n && col >= 0 && col < m) {
			return true
		} else {
			return false
		}
	}
	
	function findDistance(row, col) {
		return Math.abs(endRow - row) + Math.abs(endCol - col)
	}
	
	const directions = [[1,0], [-1,0], [0,1], [0,-1]]
	const startNode = new Node(startRow, startCol)
	// find g and h
	startNode.g = 0
	startNode.h = findDistance(startNode.row, startNode.col)
	
	const queue = [startNode]
	let lastNode = null
	
	while(queue.length) {
		// get the node
		const node = queue.shift()
		graph[node.row][node.col] = 2
		
		if (node.row === endRow && node.col === endCol) {
			lastNode = node
			break;
		}
		
		// loop thru the neighbors
		
		for (let dir of directions) {
			let [x,y] = dir
			let newRow = node.row + x
			let newCol = node.col + y
			if (inBounds(newRow, newCol) && graph[newRow][newCol] === 0) {
				
				// create new node
				let neighborNode = new Node(newRow, newCol)
				
				// check for g value, h value and set parent node
				let newG = node.g + 1
				let newH = findDistance(newRow, newCol)
				neighborNode.h = newH
				
				// if newG is less than old g, change g and parent
				// if (newG < neighborNode.g) {
					neighborNode.g = newG
				// reset the parent field
					neighborNode.parent = node
				// }
				neighborNode.f = neighborNode.g + neighborNode.h
				// add to queue
				queue.push(neighborNode)
			}
		}
		
		// sort by f, then by g
		queue.sort((a,b) => a.f - b.f || a.g - b.g)
	}
	
	let output = []
	let currNode = lastNode
	while(currNode) {
		output.push([currNode.row, currNode.col])
		currNode = currNode.parent
	}
	output.reverse()
	return output
}
