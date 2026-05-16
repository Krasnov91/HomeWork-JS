/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code

const n = 20;
let sum = 0;
let count = 1;

while (count <= n) {


// console.log(count);


sum = sum + count;
// count = (sum % count);
 count = count + 1 + (count % 2);


// console.log("  " + sum);


}




// console.log(" ");

console.log(sum);
