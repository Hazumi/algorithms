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
