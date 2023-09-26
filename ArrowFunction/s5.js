//e.Return all the palindromes in an array

const words = ["racecar", "hello", "level", "world", "deified"];

const isPalindrome = (str) => {

  str = str.replace(/\s/g, '').toLowerCase();

  return str === str.split('').reverse().join('');
};

const findPalindromes = (arr) => arr.filter((word) => isPalindrome(word));

const palindromeArray = findPalindromes(words);

console.log(palindromeArray);
