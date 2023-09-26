//1.Do the below programs in Arrow Funtion
//a.Print odd numbers in an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = (arr) => {
  var num='';
  arr.forEach((number) => {
    if (number % 2 !== 0) {
      num+=number + ' ';
      ;
    }
  });
  console.log(num)
};
printOddNumbers(numbers);






