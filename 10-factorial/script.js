/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
  let count = 1;
  if (n > 1) {
    for (let i = 2; i <= n; i++) {
      count = count * i;
    };
    return count;
  } else if (n == 0 || n == 1) {
    return 1;
  } else {
    return false;
  };
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720