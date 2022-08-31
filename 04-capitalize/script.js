/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
  if (str && str != ' ') {
    let arr = str.trim().split(/\s+/);
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
      result += arr[i] + ' ';
    };
    return result.trim();
  } else return '';
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"