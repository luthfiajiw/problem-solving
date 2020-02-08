// Determine if there is a pair of values in the array
// where the average of the pair equals the target average

function averagePair(arr, targetAvg) {
  let firstPointer = 0;
  let secPointer = arr.length - 1;

  arr.sort((a,b) => a > b);

  while (firstPointer < secPointer) {
    let avg = (arr[firstPointer] + arr[secPointer]) / 2;

    if (avg === targetAvg) return true
    else if (avg > targetAvg) secPointer--
    else firstPointer++;
  }

  return false;
}

averagePair([1,2,3,4], 4)

// result = false
