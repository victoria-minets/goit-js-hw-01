'use strict';

// function check(age) {
//   console.log(typeof age);

//   if (Number(age) === 18) {
//     return 'Ти ще молодий';
//   } else {
//     return 'Іди за ліками';
//   }
// }

// let user = prompt('Введіть ваш вік');
// console.log(check(user));

// -------------------------------------------------------------------------------------

// function calcBMI(weight, height) {
//   let numWeight = weight.replace(',', '.');
//   numWeight = Number.parseFloat(numWeight);
//   console.log(typeof numWeight);
//   console.log(numWeight);

//   let numHeight = height.replace(',', '.');
//   //   якщо у вводних немає коми, то заміна не спрацює, але помилки не буде
//   numHeight = Number.parseFloat(numHeight);
//   console.log(typeof numHeight);
//   console.log(numHeight);

//   const bmi = numWeight / numHeight ** 2; // це константа в функції не та саме, що зовні (можна повторно використати те саме ім'я, що в програмі)
//   console.log(typeof bmi);
//   console.log(bmi);

//   return Math.round(bmi); // округлення до найближчого цілого числа (за математичними правилами)

//   //   return Number.parseFloat(bmi.toFixed(1)); // toFixed повертає не номер, а рядок, тому його треба обернути знову в номер
// }

// const bmi = calcBMI('69,5', '1.58');
// console.log(typeof bmi);
// console.log(bmi);

// --------------------------------------------------------------------

// function checkAge(age) {
//   let result;
//   if (age >= 18) {
//     result = 'You are an adult';
//   }
//   return result;
// }

// console.log(checkAge(10));

// --------------------------------------------------------------------

// function checkStorage(available, ordered) {
//   if (ordered == 0) {
//     return 'There are no products in the order!';
//   } else if (ordered > available) {
//     return 'Your order is too large, there are not enough items in stock!';
//   } else {
//     return 'The order is accepted, our manager will contact you';
//   }
// }

// console.log(checkStorage(70, 0));

// --------------------------------------------------------------------

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0;
//       break;
//     case 'professional':
//       return 20;
//       break;
//     case 'organization':
//       return 50;
//       break;
//     default:
//       return 'Invalid subscription type!';
//   }
// }

// // --------------------------------------------------------------------

// function isNumberInRange(start, end, number) {
//   if (number >= start && number <= end) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // --------------------------------------------------------------------

// function checkForName(fullName, firstName) {
//   const fullNameLower = fullName.toLowerCase();
//   const firstNameLower = firstName.toLowerCase();
//   return fullNameLower.includes(firstNameLower);
// }

// function checkForName(fullName, firstName) {
//   const fullNameLower = fullName.toLowerCase();
//   const firstNameLower = firstName.toLowerCase();
//   return fullName.toLowerCase().includes(firstName.toLowerCase());
// }

// function checkFileExtension(fileName, ext) {
//   if (fileName.endsWith(ext)) {
//     return 'File extension matches';
//   } else {
//     return 'File extension does not match';
//   }
// }

// // --------------------------------------------------------------------

// Використовуючи методи indexOf та slice, доповни код функції таким чином, щоб:

// Вона перевіряла наявність розширення в імені файлу (назва розширення відокремлюється від імені файла крапкою)
// Якщо ім'я файлу не містить розширення, то функція повертала новий підрядок, що містить ім'я файлу без змін
// В іншому разі функція повертала підрядок з іменем файлу, але без розширення

// function getFileName(file) {
//   if (file.indexOf('.') === -1) {
//     return file;
//   } else return file.slice(0, file.indexOf('.'));
// }

// // ----------------------розрахунок факторіала----------------------------------------------

// function calculateTotal(number) {
//   let counter = 1;
//   let result = 0;
//   while (counter <= number) {
//     result = result + counter;
//     counter += 1;
//   }
//   return result;
// }

// --------------------------------------------------------------------

function findNumber(max, target) {
  console.log('Log in the body of the function before the cycle');

  for (let i = 5; i <= max; i += 1) {
    console.log('Current counter value i:', i);

    if (i === target) {
      console.log(`Found the number ${target}, interrupt the cycle`);
      break;
    }
  }

  console.log('Log in body function after cycle');
}

findNumber(10, 6);
console.log('Log after exiting function');
