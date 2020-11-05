var detectCycle = function(head) {
    
    /*
    Total linked list parts = A + B + C
    A = length before the cycle
    B = start of the cycle to meeting point
    C = meeting point to start of cycle
    Total = A + B + C
    
    F = 2B + A + C
    S = A + B
    F = 2*S --F is twice as fast as S
    
    2B + A + C = 2(A + B)
    C = A
    
    */
    if (head === null || head.next === null || head.next.next === null) {
        return null
    }
    
    let fast = head.next.next
    let slow = head.next
    while (fast.next && fast.next.next) {
        fast = fast.next.next
        slow = slow.next
        if (slow === fast) {
        
            fast = head
            while (slow !== fast) {
                fast = fast.next
                slow = slow.next
            }
            return slow
        }
    }
    return null
};
