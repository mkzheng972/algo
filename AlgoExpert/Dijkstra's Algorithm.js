function dijkstrasAlgorithm(start, edges) {
  // Write your code here.
	
	// vals are set to infinity because we don't know the cost to get there (aka could be really big)
	// and need to find min cost
	const output = new Array(edges.length).fill(Infinity)
	const queue = [[start, 0]]
	const visited = new Set()
	output[start] = 0
	
	while (queue.length) {
		let [node, currDist] = queue.shift()
		
		visited.add(node)
		
		// no neighbor nodes
		if (edges[node].length === 0) {
			continue
		}
		
		// loop thru neighbor nodes
		for (let i = 0; i < edges[node].length; i++) {
			let edge = edges[node][i]
			let [target, targetDist] = edge
			
			// "relaxation" aka get the smallest cost to node
			let currTargetDist = output[target]
			let newTargetDist = currDist + targetDist
			if (newTargetDist < currTargetDist) {
				output[target] = newTargetDist
			}
			
			// add to queue if node is not visited yet
			// visited in the sense that it's neighbors' were looked at
			if (!visited.has(target)) {
				queue.push([target, output[target]])
			}
		}
	}
	
	return output.map(val => val === Infinity ? -1 : val)
}
