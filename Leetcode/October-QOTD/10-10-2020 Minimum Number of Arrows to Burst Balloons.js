var findMinArrowShots = function(points) {
    
    if (points.length === 0) {
        return 0
    }
    points.sort((a,b) => a[1] - b[1])
    
    let prev = points[0][1]
    let count = 1
    for (let i = 1; i < points.length; i++) {
        if (prev >= points[i][0]) {
            continue
        } else {
            count += 1
            prev = points[i][1]
        }
    }
    return count
};
