//
const originalArray = [1, 2, 3, 4, 5];
const k = 2;

const rotateArray = function(arr, k) {
  const length = arr.length;
  k %= length; // Ensure k is within the array length

  const rotatedArray = [];

  for (let i = 0; i < length; i++) {
    const newIndex = (i + k) % length;
    rotatedArray[newIndex] = arr[i];
  }

  return rotatedArray;
}(originalArray, k);

console.log(rotateArray); // Output: [4, 5, 1, 2, 3]
