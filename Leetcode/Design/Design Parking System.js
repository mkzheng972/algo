class ParkingSystem {
    constructor(big, medium, small) {

        this.spaces = [0, big, medium, small]
    }
    
    // return boolean
    addCar(carType) {
        
        if (this.spaces[carType] > 0) {
            this.spaces[carType] -= 1
            return true
        }
        return false
    }
}

/* Leetcode #1603 */
