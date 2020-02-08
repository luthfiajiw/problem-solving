function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (var i = 0; i < arr1.length; i++) {
    // Find the value of an element in arr1
    // in what index it in arr2
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    // -1 it means the value isn't in arr2
    if (correctIndex == -1) {
      return false;
    }

    console.log(arr2);
    // If there is, delete the value from arr2
    arr2.splice(correctIndex, 1);
  }

  return true;
}

same([1, 2, 3, 2], [4, 1, 4, 9]);

// This problem solving uses O(n^2) approach, because there is nested loop
// which is arr2.indexOf() do iterations inside for loop
