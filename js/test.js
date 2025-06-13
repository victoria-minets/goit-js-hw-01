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

// function findNumber(max, target) {
//   console.log('Log in the body of the function before the cycle');

//   for (let i = 5; i <= max; i += 1) {
//     console.log('Current counter value i:', i);

//     if (i === target) {
//       console.log(`Found the number ${target}, interrupt the cycle`);
//       break;
//     }
//   }

//   console.log('Log in body function after cycle');
// }

// findNumber(10, 6);
// console.log('Log after exiting function');

// --------------------------------------------------------------------

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// console.log(arr1 === arr2); // false
// console.log([] === []); // false

// --------------------------------------------------------------------

// function transformString(string) {
//   const words = string.split('_');
//   console.log(words);
//   return words.join('-');
// }

// transformString('user_age'); // "user-age"
// transformString('price_per_droid'); // "price-per-droid"

// --------------------------------------------------------------------

// function getSlice(array, value) {
//   const idx = array.indexOf(value);
//   if (idx === -1) {
//     return [];
//   } else {
//     return array.slice(0, idx + 1);
//   }
// }

// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Poly')); // повертає ["Mango", "Poly"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Ajax')); //повертає ["Mango", "Poly", "Ajax"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Mango')); // повертає ["Mango"]
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Jacob')); //повертає []
// console.log(getSlice(['Mango', 'Poly', 'Ajax'], 'Casey')); //повертає []

// --------------------------------------------------------------------

// function createArrayOfNumbers(min, max) {
//   const myNumbers = [];
//   for (let i = min; i <= max; i += 1) {
//     myNumbers.push(i);
//   }
//   return myNumbers;
// }
// --------------------------------------------------------------------

// function getEvenNumbers(start, end) {
//   const myNumbers = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       myNumbers.push(i);
//     }
//   }
//   return myNumbers;
// }

// console.log(getEvenNumbers(8, 8));

// --------------------------------------------------------------------

// function checkStorage(storage, item) {
//   let itemNormalize = item.toLowerCase();
//   if (storage.includes(itemNormalize)) {
//     return `${itemNormalize} is available to order!`;
//   } else {
//     return 'Sorry! We are out of stock!';
//   }
// }

// console.log(checkStorage(['apple', 'plum', 'pear'], 'pLuM'));

// --------------------------------------------------------------------

// function getCommonElements(array1, array2) {
//   const myNumbers = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       myNumbers.push(array1[i]);
//     }
//   }
//   return myNumbers;
// }

// --------------------------------------------------------------------

// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4));

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tag[0];
// const lastTag = apartment.tag[2];

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// ------------------------------------------------------

// function getAllPropValues(propName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   const result = [];
//   for (const product of products) {
//     if (product.hasOwnProperty(propName)) {
//       result.push(product[propName]);
//     }
//   }
//   return result;
// }

// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// for (const key of keys) {
//   if (object.hasOwnProperty(key)) {
//     propCount += 1;
//   }
// }

// -------------------------------------------------------

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price * product.quantity;
//     }
//   }
//   return `Product ${productName} not found!`;
// }

// console.log(calculateTotalPrice('Blaster'));
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Droid'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   updatePotionName(oldName, newName) {
// 		for (const potion of this.potions) {
// 			if(potion.name === oldName) {
// 				potion.name = newName;
// 			}
//   },
// };

// function addOverNum(value, ...args) {
//   let total = 0;
//   for (let i = 0; i <= args.length; i += 1) {
//     if (args[i] > value) {
//       total += args[i];
//     }
//   }
//   return total;
// }

// console.log(addOverNum(50, 15, 27));
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));
// console.log(addOverNum(15, 32, 6, 13, 19, 8));
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));

// -------------------------------------------------------

// БАНКІНГ
// два типи трансакцій по рахунку

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// // кожна трансакція це обєкт з id, type, amount

// const account = {
//   balance: 0,
//   transactions: [],

//   // метод створює та повертає обєкт трансакцій
//   createTransaction(amount, type) {
//     const obj = { id: amount, amount, type };
//     return obj;
//   },

//   // додавання до балансу
//   deposit(amount) {
//     this.balance += account;
//     const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
//     this.transactions.push(transaction);
//   },

//   // зняття з балансу
//   withdraw(amount) {},

//   getBalance() {},

//   getTransactionDetails(id) {},
//   getTransactionTotal(type) {},
// };

// account.deposit(200);

// console.log(account);

// ----------------------------------------------------------------------

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }

// console.log(makeMessage('Royal Grand', makePizza)); // повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage('Ultracheese', deliverPizza)); // повертає рядок "Delivering Ultracheese pizza."

// function filterArray(numbers, value) {
//   let result = [];

//   numbers.forEach(function (number, index) {
//     if (number > value) {
//       result.push(number);
//     }
//   });

//   return result;
// }

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(value => (value % 2 = 0));
// const oddNumbers = numbers.filter(value => !(value % 2 = 0));

// ------------------------------------------------------

// const students = [
//   { name: 'Mango', score: 83, courses: ['mathematics', 'physics'] },
//   { name: 'Poly', score: 59, courses: ['science', 'mathematics'] },
//   { name: 'Ajax', score: 37, courses: ['physics', 'biology'] },
//   { name: 'Kiwi', score: 94, courses: ['literature', 'science'] },
// ];

// const uniqueSortedCourses = students.flatMap(student => student.courses);

// console.log(uniqueSortedCourses);

// const result = uniqueSortedCourses.filter((course, index, array) => {
//   console.log(array);
//   console.log(index);
//   console.log(course);
//   console.log(array.indexOf(course));
//   return array.indexOf(course) === index;
// });

// // .toSorted((a, b) => a.localeCompare(b))

// console.log(result); // ["biology", "science", "literature", "mathematics", "physics"]

// -------------------------------------------------------------

// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(names);

// filter, map, toSorted;
//   const uniqueSortedCourses = students
//   .flatMap(student => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .toSorted((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ["biology", "science", "literature", "mathematics", "physics"]

// ----------------------------------

// const pizzaPalace = {
//   pizzas: ['Supercheese', 'Smoked', 'Four meats'],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order('Big Mike'));

// -------------------------------------------------------------
// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів.
// Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список.
// Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.
// Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається
// у властивості blacklistedEmails, і повертати true або false.

class User {
  email;

  constructor(email) {
    this.email = email;
  }

  get email() {
    return this.email;
  }

  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  blacklistedEmails = [];

  static role = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor(params) {
    super(params.email);
    this.access = params.access;
  }

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted('mango@mail.com')); // false
console.log(mango.isBlacklisted('poly@mail.com')); // true
