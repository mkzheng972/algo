function gasCheck(A, X, Y, Z) {

  /*
  R:
  A -> input array of cars
  XYZ are stations

  A:
  creating a new array of length 3 to hold wait time of cars
  creating a stations array of [X,Y,Z]

  queue -> while loop that loops until A is empty

  get the current car gas value

  loop thru stations array to see if car can be filled by station
  and if the station is free for current car to move in

  reverse the input array to pop for constant time

  E: 
  2 8 4 3 2
  totalwaittime = 2 + 3 + 2

  waittime [0,0,0]
  stations  [1,3,0]
  currcar 4
  */

  A.reverse()
  let waitTime = new Array(3).fill(0)
  let stations = [X,Y,Z]
  let totalWait = 0

  while (A.length !== 0) {
    
    let currentCar = A[A.length-1]
    // our -1 check
    if (currentCar > Math.max(...stations)) {
      return -1
    }

    // loop thru the stations
    let selectedStation = -1
    for (let i = 0; i < stations.length; i++) {
      let station = stations[i]
      if (currentCar <= station && waitTime[i] === 0) {
        selectedStation = i
        waitTime[i] = currentCar
        stations[i] -= currentCar
        break;
      }
    }
    // all valid stations are occupied -> add to totalWait
    if (selectedStation === -1) {
      let minWait = Infinity
      for (let time of waitTime) {
        if (time !== 0 && time < minWait) {
          minWait = time
        }
      }
      totalWait += minWait 
      for (let i = 0; i < waitTime.length; i++) {
        waitTime[i] -= minWait
        // if waitTime[i] goes below zero reset it to zero
        if (waitTime[i] < 0) {
          waitTime[i] = 0
        }
      }
    } else {
      // first car in queue does not need to wait
      A.pop()
    }
  }
  return totalWait
}

// gasCheck([2,8,4], 7, 11, 0)
// gasCheck([2,8,4,3,2], 7, 11, 3)
// gasCheck([8,15,9,3,10,7,5,6,13,1], 77, 0, 0)
// gasCheck([5], 4, 0, 3)
