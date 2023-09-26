//f.Return median of two sorted arrays of the same size.

const arr1 = [1, 3, 8, 12, 15];
const arr2 = [7, 9, 10, 13, 16];

const findMedian = function(nums1, nums2) {
  const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
  const middle = Math.floor(mergedArray.length / 2);
  
  if (mergedArray.length % 2 === 0) {
    return (mergedArray[middle - 1] + mergedArray[middle]) / 2;
  } else {
    return mergedArray[middle];
  }
};

const median = findMedian(arr1, arr2);
console.log(median); // Output: 9
