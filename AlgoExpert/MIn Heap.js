// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
		
		// currentNode = i
		// childOne = 2i + 1
		// childTwo = 2i + 2
		// parentNode -> Math.floor((i-1)/2)
  }

  buildHeap(array) {
    // Write your code here.
		let firstParentIndex = Math.floor((array.length - 2)/ 2)
		for (let i = firstParentIndex; i >= 0; i--) {
			this.siftDown(i, array.length-1, array)
		}
		return array
  }

  siftDown(currIndex, endIndex, heap) {
    // Write your code here.
		let childOneIndex = currIndex * 2 + 1
		let childTwoIndex = currIndex * 2 + 2
		while (childOneIndex <= endIndex) {
			if(currIndex * 2 + 2 <= endIndex) {
			 childTwoIndex = currIndex * 2 + 2
			} else {
			 childTwoIndex = -1
			}
			let indexToSwap
			if (childTwoIndex !== -1 && heap[childTwoIndex] < heap[childOneIndex]) {
				indexToSwap = childTwoIndex
			} else {
				indexToSwap = childOneIndex
			}
			if (heap[indexToSwap] < heap[currIndex]) {
				this.swap(currIndex, indexToSwap, heap)
				currIndex = indexToSwap
				childOneIndex = currIndex * 2 + 1
			} else {
				break;
			}
		}
  }

  siftUp(index, heap) {
    // Write your code here.
		let parentIndex = Math.floor((index - 1)/2)
		while (index > 0 && heap[index] < heap[parentIndex]) {
			this.swap(index, parentIndex, heap)
			index = parentIndex
			parentIndex = Math.floor((index-1)/2)
		}
  }

  peek() {
    // Write your code here.
		return this.heap[0]
  }

  remove() {
    // Write your code here.
		
		// 1. swap root and last node and pop off array
		// 2. sift down method until val is in correct position
		// 3. swap with the smallest value children node
		this.swap(0, this.heap.length-1, this.heap)
		let valueRemoved = this.heap.pop()
		this.siftDown(0, this.heap.length-1, this.heap)
		return valueRemoved
  }

  insert(value) {
    // Write your code here.
		
		// keep finding parent and if smaller -> swap values
		this.heap.push(value)
		this.siftUp(this.heap.length-1, this.heap)
		
  }
	swap(a,b, heap) {
		let temp = heap[a]
		heap[a] = heap[b]
		heap[b] = temp
	}
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
