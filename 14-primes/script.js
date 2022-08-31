/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
  let arr = [];
  for (let i = 2; i <= num; i++) {
    nextNumber:
    if (i % 1 == 0 && i % i == 0) {
      for (let j = 2; j <= 10; j++) {
        if (j == i || i % j != 0) {
          continue;
        } else break nextNumber;
      };
      arr.push(i);
    };
  };
  return arr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]