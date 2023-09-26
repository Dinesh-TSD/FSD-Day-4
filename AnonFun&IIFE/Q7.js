//g.Remove duplicates from an array

const numbers = [1, 2, 2, 3, 4, 4, 5, 5];

const removeDuplicates = function(arr) {
  const uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}(numbers);

console.log(removeDuplicates); // Output: [1, 2, 3, 4, 5, 6]
