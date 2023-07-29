'use strict'

// debugger


// for(let i = 1;i < 10;i++) {
//   if(i % 2 === 0) {
//     continue;
//   }
//   console.log(i)
// }

// const SECONDS_IN_DAYS = 24 * 60 * 60; -значення за правилом розрахунків
// const iterationcount = 1e1 - 1; 

// for(let dayAgo = 0; dayAgo < iterationcount; dayAgo ++) {

// const seconDay = SECONDS_IN_DAYS * dayAgo;


//   console.log(seconDay);
// }

// Завдання дізнатися скільки разів буде етерація проводитися поділенна на 2

// let n = 256;
// let count = 0;

// while (Number.isInteger(n)) { //-спочатку умова перевірки ітерації а потім count залиш 0
//   n /= 2; // -  допомагає дізнатися кількість етерації

//   if(!(Number.isInteger(n))) {
//     break;
//   }
//    count++;
// } 

// do {
//   n /= 2;
//   count++ -спочатку до 0 + 1

// } while (Number.isInteger(n))  -працює коректніше з дробовими числами потім 1 - 1

// console.log(count);

// Правило якщо у нас відома кількість ітерацій  то треба використовувати цикл for,якщо відома лише умова то краще використовувати цикл while

