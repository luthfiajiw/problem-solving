// O(n)
function countUniqueValues(sortedArr) {
  let firstPointer = 0;
  let secondPointer = 1;

  if (sortedArr.length === 0) {
    return 0;
  }

  while (secondPointer <= sortedArr.length) {
    if (sortedArr[secondPointer] !== sortedArr[firstPointer]) {
      firstPointer++
      sortedArr[firstPointer] = sortedArr[secondPointer]
    }
    secondPointer++
  }

  return firstPointer;
}

countUniqueValues([1,1,2,2,2,3,3,4,5,6,6])

// result = 6
