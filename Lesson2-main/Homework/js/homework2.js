// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// const number = 1;

// if (number > 0) {
//     console.log("true");
// } else { (number <= 0) 
//     console.log("false");
// }
    
// Якщо зміна приймає варіант 1, то отримуємо результат true, а якщо 0 або -3 результат false.     


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let jaw = 'test';

// if (jaw === "test") {  
//     console.log("true");
// } else {
//  console.log("false");
// }

// Якщо зміна = 'test' результат true, якщо зміна = "qwerty" або true результат false.

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// const number = 13;

// if (number > 10) {
//     console.log(number - 5);
// } else { (number < 10) 
//     console.log(number + 5);
// }

// Якщо зміна = 1, результат отримуємо 6; якщо зміна = 10, результат 15; якщо змінна = 13, то результат отримуємо 8.
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const number = prompt("Введіть порядковий номер, який відповідає місяцю вашого народження");
// let month;

// switch (number) {
// case "1": 
// month = "January";
// console.log("January"); 
// break;
// case "2":
// month = "February"; 
// console.log("February"); 
// break;
// case "3":
// month = "March"; 
// console.log("March"); 
// break;
// case "4":
//  month = "April"; 
// console.log("April"); 
// break;
// case "5":
// month = "May"; 
// console.log("May"); 
// break;
// case "6":
// month = "June"; 
// console.log("June"); 
// break;
// case "7":
// month = "July"; 
// console.log("July"); 
// break;
// case "8":
// month = "August"; 
// console.log("August"); 
// break;
// case "9":
// month = "September"; 
// console.log("September"); 
// break;
// case "10":
// month = "October"; 
// console.log("October"); 
// break;
// case "11":
// month = "November"; 
// console.log("November"); 
// break;
// case "12":
// month = "December"; 
// console.log("December"); 
// break;
// default:
// console.log("Виберіть інше число");
// break;
// }


//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number1 = prompt("Введіть трьохзначне число")
// console.log(number1);
// console.log(typeof number1);
// const newNumber1 = Number(number1);
// console.log(typeof newNumber1);
// const number2 = prompt("Введіть інше трьохзначне число")
// console.log(number2);
// console.log(typeof number2);
// const newNumber2 = Number(number2);
// console.log(typeof newNumber2);
// alert (newNumber1 + newNumber2)
// Для того, щоб додати два числа коректно довелося 
//спочатку здійснити перетворення з типу "string" на тип "number".
// А вже потім вивести в alert необхідний результат.