// reverses a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// factorial
function factorialize(num) {
  var count = 1;
  for (var i = 1; i <= num; i++) {
    count += i;
  }
  return count;
}

// longest word in string
function findLongestWord(str) {
  return str.split(' ')
    .reduce(function(a, b) {
      return a.length > b.length ? a : b;
    }).length;
}

// check for palindromes
function palindrome(str) {
  str = str.replace(/[\W_]/g, '').toLowerCase()
  return str === str.split('').reverse().join('');
}

// largest numbers in array
function largestOfFour(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    var number = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > number) {
        number = arr[i][j];
      }
    }
    array[i] = number;
  }
  return array;
}

// check if str ends with another str
function confirmEnding(str, target) {
var match;
  for (var i = 0; i < str.length; i++) {
    if (str.substring(i, str.length) == target) {
      return true;
  } else {
      match = false;
    }
  }
  return match;
}

// largest number in array
function largestOfFour(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    var number = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > number) {
        number = arr[i][j];
      }
    }
    array[i] = number;
  }
  return array;
}

// match str to end of strfunction confirmEnding(str, target) {
var match;
  for (var i = 0; i < str.length; i++) {
    if (str.substring(i, str.length) == target) {
      return true;
  } else {
      match = false;
    }
  }
  return match;
}
