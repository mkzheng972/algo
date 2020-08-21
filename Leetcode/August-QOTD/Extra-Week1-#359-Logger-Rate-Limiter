var Logger = function() {
    // create a hash to store the messange and the time it was sent
    this.hash = new Map()
};

/**
 * Returns true if the message should be printed in the given timestamp, otherwise returns false.
        If this method returns false, the message will not be printed.
        The timestamp is in seconds granularity. 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!this.hash.has(message)) {
        this.hash.set(message, timestamp)
        return true
    } else {
        // check the previous timestamp
        if (timestamp - this.hash.get(message) >= 10) {
            this.hash.set(message, timestamp)
            return true
        } else {
            return false
        }
        
    }
};
