/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
  for (let number = 1; number <= num; number++) 
  {
    let three = number % 3;
    let five = number % 5;
    if (three == 0) {
      if (five == 0) {
        console.log('fizzbuzz');
      } else {
        console.log('fizz');
      };
    } else if (five == 0) {
      console.log('buzz');
    } else {
      console.log(number);
    };
  };
}

// Протестируйте решение, вызывая функцию с разными аргументами:
fizzBuzz(15);