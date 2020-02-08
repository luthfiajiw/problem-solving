function productOfArray(arr) {
  let total;
  if(arr.length == 1) return arr[0];
  total = arr[0];
  arr.shift();

  return total * productOfArray(arr);
}

productOfArray([1,2,3]);
// result = 6