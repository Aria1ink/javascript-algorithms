/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
  let arrNumbers = [];
  for (let number = 2; number <= num; number++) {
    nextNumber:
    if (number % 1 == 0 && number % number == 0) {
      for (let j = 2; j <= 10; j++) {
        if (j == number || number % j != 0) {
          continue;
        } else break nextNumber;
      };
      arrNumbers.push(number);
    };
  };
  return arrNumbers;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]