function findMinAndRemoveSorted(arr){
  return arr.shift()
}

function merge(firstSubarray, secondSubArray){
  let sorted = []
  while(firstSubarray.length != 0 && secondSubArray.length != 0){
    if(firstSubarray[0] < secondSubArray[0]){
      sorted.push(findMinAndRemoveSorted(firstSubarray))
    } else {
      sorted.push(findMinAndRemoveSorted(secondSubArray))
    }
  }
  return sorted.concat(firstSubarray).concat(secondSubArray)
}

function mergeSort(arr){
  let midpoint = arr.length/2
  let firstHalf = arr.slice(0, midpoint)
  let secondHalf = arr.slice(midpoint, arr.length)
  let sorted;

  if (arr.length < 2) {
    return arr
  } else{
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
