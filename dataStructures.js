// level {2}

// 1. Write a function to remove all even numbers from an Array.
const removeEven = function (arr) {
  return arr.filter(el => el % 2 === 1)
}
console.log(removeEven([1, 3, 4, 6, 7, 8]));

// 2. Replace all the vowels in a string with uppercase vowels.
const removeVowel = function (arr) {
  const newArray = arr.split('').map(function (el) {
    if (el === 'a' || el === 'e' || el === 'i' || el === 'o' || el === 'u') return el.toUpperCase();
    else return el;
  });
  return newArray.join('');
}
console.log(removeVowel('Elie'));


// 3. Write a function to find the maximum number in an array.
const maxnumber = function (arr) {
  return arr.reduce((max, el) => max > el ? max : el, arr[0]);
}
console.log(maxnumber([1, 3, 4, 6, 7, 8, 2, 5]));