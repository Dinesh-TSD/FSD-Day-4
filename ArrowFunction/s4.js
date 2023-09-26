//d.Return all the prime numbers in an array

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const findPrimeNumbers = (arr) => {
  const primeNumbers = [];
  arr.forEach((number) => {
    if (isPrime(number)) {
      primeNumbers.push(number);
    }
  });
  return primeNumbers;
};

const primeNumbers = findPrimeNumbers(numbers);

console.log(primeNumbers);
