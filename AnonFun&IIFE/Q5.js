//e.Return all the palindromes in an array
const words = ["hello", "level", "world", "radar", "apple"];

const palindromes = function(arr) {
  return arr.filter(word => word === word.split('').reverse().join(''));
}(words);

console.log(palindromes); // Output: ["level", "radar"]
