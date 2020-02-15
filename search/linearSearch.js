function linearSearch(arr, query) {
  for (let index in arr) {
    if (arr[index] === query) return index;
  }
  return -1;
}

linearSearch([1,2,3], 2);
