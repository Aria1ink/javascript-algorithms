/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
  let count = 0;
  if (n > 9) {
    for (let number = 10; number <= n; number++) {
      number = number.toString();
      for (let j = 0; j < number.length; j++) {
        if (number[j] == '0') {
          count++;
        };
      };
    };
    return count;
  } else {
    return count;
  };
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
