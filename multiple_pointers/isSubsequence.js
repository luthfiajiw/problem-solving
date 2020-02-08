// The function checks whether the characters in the first string
// form a subsequence of the second string.

function isSubsequence(str1, str2) {
  if(!str1) return true;

  // Pointer for str1
  let i = 0;
  // Pointer for str2
  let j = 0;

  while (j < str2.length) {
    if (str1[i] === str2[j]) i++;
    else if (i === str1.length) return true;
    else j++;
  }

  return false;
}

isSubsequence('sing', 'stign');
// false
isSubsequence('sing', 'sting');
// true