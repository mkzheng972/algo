function pancakeSort(arr) {
  // your code goes here
  
  /*
  
  search for the max element first for each iteration
  once you find the max elm, flip the subArray at maxValIndex
  continue looping until the whole array is sorted
  
  maxValIndex = arr.length - 1
  
  */
  
  /*
  [1,5,4,3,2]
  [5,1,4,3,2]
  [2,3,4,1,5] // flip whole array
  [4,3,2,1,5] // 
  [1,2,3,4,5]
  
  */
  
  function flip(arr, k) {
    
    let left = 0
    let right = k
    while (left < right) {
      let temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      left += 1
      right -= 1
    }
  }

    
 function findMaxElementIndex(arr, numElmFound) {

  let maxVal = -1
  let outputIndex = -1

  for (let i = 0; i < numElmFound; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i]
      outputIndex = i
    }
  }
   return outputIndex
 }

 for (let j = arr.length-1; j >= 0; j--) {

   let foundMaxIndex = findMaxElementIndex(arr, j + 1)
   flip(arr, foundMaxIndex)
   flip(arr, j)

 }
 
  return arr
}

pancakeSort([1, 5, 4, 3, 2])
