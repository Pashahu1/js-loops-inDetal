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

// function getYears(amount, percent, expectedLimit) {
//   let i = -1;
//   let a = amount;

//   while (a <= expectedLimit) {

//     a += a * percent * 0.01;
//     i++;
//   }

//   return i;
// }

// console.log(getYears(1600, 10, 2000)) // 2 
// console.log(getYears(500, 3, 550))    // 3
// console.log(getYears(5000, 5, 6500))  // 5


// const arr = ['S', 'E', 'R', 'G', 'O'];
// const reversedArr = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArr.push(arr[i]);
// }

// console.log(reversedArr);


// function reverseWords(str) {
//   const words = str.split(' ');
//   const reversedWords = [];

//   for (let word of words) {
//     const reverseWord = [];
//     for (let i = word.length - 1; i >= 0; i--) {
//       reverseWord.push(word[i]);
//     }
//     reversedWords.push(reverseWord.join(''));
//   }

//   return reversedWords.join(' ');
// }

// console.log(reverseWords('This is an example!')); // Output: 'sihT si na !elpmaxe'
// console.log(reverseWords('double  spaces')); 

// const arr = ['User','Name']
// const total = []

// for (let i = arr.length - 1; i >= 0; i--) {
//   total.push(arr[i])
// }

// console.log(total)


  // String

// const message = '\\\'He\tllo \nworld \u23f3 \u{2345}' // юнікод формати в інеті баагато про  це написано можно використоввати бдьякий  синтаксис \n-пробіл \t-подовження рядку  \\- \ ,\'- '
// console.log(message);

// let str = '';

// for (let i = 1; i < 256; i++) {

//   str += String.fromCodePoint(i); // str мы за допомоги String.fromCodePOint(i)-форматуємо весь код який дорівнює String в юнікод
// }

// console.log(str);


// порівняння першого слова

// const word1 = 'igatchok'
// const word2 = 'Hello'

// // console.log(
// //   word1.toLocaleLowerCase() > word2.toLocaleLowerCase()
// // ); зведення до одного регістру

// console.log(
//   word1.localeCompare(word2)
// );

// 1-якщо слово стоїть після слова що в localeCompare
// 0-якщо слова однакові
//-1-якщо слова стоять перед


// console.log(
//   '123\t'.repeat(4)
// );

// console.log(
//   '123\t'.padStart(19, '**** ')
// );

// console.log(
//   '123\t'.padEnd(19, '**** ')
// );

// const arr = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// } - цыкл перебораа масива строки тд

// arr.forEach(arr => {
//   console.log(arr);
// })  метод перебора масива по индексу из-за того что это метод здесь нельзя использовать breack,continue,return.

  // for (const a in arr) {
  //   console.log(a);
  // } - выводит индексное значение из цыкла

  // for (const a in arr) {
  //   console.log(arr[a]);
  // }  выводит значения масива

  // for (const a of arr) {
  //   console.log(a);
  // }



// isAlphabet('abc')




// include - позволяет знать истиное значение или нет;

// str.include(letter) - проверит совпадения константы str и поравняет есть ли те значения в letter 

// .reverse()-поворачивает елементі масива 
// .localeCompare -позволяет поровнять значения і дізнатися  що перед чим стоїть
// str.padEnd(19, '****')-добавит **** в конце строки str ограничение всего вместе 19-символов
// str.padStart(19, '****') - добавит вначале

