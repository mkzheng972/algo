// doubly-linked list 
class ListNode {
    constructor(val, key, prev, next) {
        this.val = val ? val : -1
        this.key = key ? key : null
        this.prev = prev ? prev : null
        this.next = next ? next : null
    }
}

/*

get or put counts as using the key, so need to move key to the head of the linked-list

have this.map[key] point to the node itself
head is the most recently used
tail is the least recently used
if structure is over capacity, pop off tail

*/

class LRUCache {

    constructor(capacity) {
        this.map = new Map()
        this.size = 0
        this.capacity = capacity
        this.head = null
        this.tail = null
    }
    
    get(key) {
        
        if (this.map.has(key)) {
            
            // move node to the front
            let node = this.map.get(key)
            let value = node.val
            this.moveToHead(node)
            
            return value
        } else {
            return -1
        }
    }
    
    /*
        - change node.val to new value if node exists in map
        - add newNode and increment this.size
        - remove tail if over capacity
    */
    put(key, value) {
    
        if (this.map.has(key)) {
            
            let node = this.map.get(key)
            node.val = value
            this.moveToHead(node)
        } else {
            let newNode = new ListNode(value, key)
            this.map.set(key, newNode)
            this.moveToHead(newNode)
            
            this.size += 1
            // over the capacity
            if (this.size > this.capacity) {
                
                // remove tail node
                let tailKey = this.tail.key
                let beforeTail = this.tail.prev
                beforeTail.next = null
                this.tail = beforeTail
                this.map.delete(tailKey)
                this.size -= 1
            }
        }
    }
    
    setHead(node) {
        node.prev = null
        node.next = this.head
        this.head.prev = node
        this.head = node
    }
    
    moveToHead(node) {
        
        let prevNode = node.prev
        let nextNode = node.next
        
        // first node
        if (this.head === null && this.tail === null) {
            this.head = node
            this.tail = node 
        } else {
            // middle node
            if (prevNode && nextNode) {
                prevNode.next = nextNode
                nextNode.prev = prevNode
                
                this.setHead(node)
                // tail node
            } else if (prevNode) {
                node.prev = null
                prevNode.next = null
                this.tail = prevNode
                this.setHead(node)
                // new node
            } else if (prevNode === null && nextNode === null){
                this.setHead(node)
            }
        }
    }
}
