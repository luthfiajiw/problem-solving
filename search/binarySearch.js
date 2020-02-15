// O(log n)
function binarySearch(sortedArr, query) {
  let start = 0;
  let end = sortedArr.length - 1;
  let middle = Math.floor((start + end) / 2);

  sortedArr.sort((a,b) => a > b);

  while (sortedArr[middle] !== query && start <= end) {
    if (sortedArr[middle] < query) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }

  return sortedArr[middle] === query ? middle : -1;
}

binarySearch([2,4,6,9,12,15,18], 5);
