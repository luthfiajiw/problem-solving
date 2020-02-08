function areThereDuplicate(...args) {
  let firstPointer = 0;
  let secPointer = 1;

  args.sort((a,b) => a > b)
  
  while (secPointer < args.length) {
    if (args[firstPointer] !== args[secPointer]) {
      firstPointer++;
      secPointer++;
    } else {
      return true
    }
  }

  return false;
}

areThereDuplicate(1,5,3,1,4,2);

// result = true