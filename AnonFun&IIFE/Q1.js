//1.Do the below programs in anonymous function & IIFE
//a.Print odd numbers in an array
//used IIFE Function

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var num='';
numbers.forEach(function(number) {
  if (number % 2 !== 0) {
    num+=number + ' ';
  }
});
console.log(num);




