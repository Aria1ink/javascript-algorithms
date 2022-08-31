/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
  let result = 1;
  if (n > 1) {
    for (let number = 2; number <= n; number++) {
      result = result * number;
    };
    return result;
  } else if (n == 0 || n == 1) {
    return result;
  } else {
    return false;
  };
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720