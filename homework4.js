//Домашнє завдання 
//---1--

// Перепишіть функцію, використовуючи '?' або '||' 


// function checkAge(age)
// {  if (age > 18 || 5 * 6 === 33)  
// { return true;  
// } else {   
//  return confirm('Батьки дозволили?');  } 
// } 
// checkAge(16);
// ---2-- 

// Напишіть функцію min(a, b), яка повертає менше
//  з двох чисел a та b. 
// function showMinNumber(a, b) {
//     if (a < b) {
//         return console.log(a); 
//     } else {
//         return console.log(b);
//     }
// }
// showMinNumber(7, 5);

// ---3--

// Перепишіть з використанням стрілкових функцій 
// Замініть Функціональні Вирази на стрілкові 
// функції у коді нижче:
// function ask(question, yes, no) {
//  if (confirm(question)) yes(); 
//  else no(); }
// ask(  "Ви згодні?",  
// function() { 
//     alert("Ви погодились."); },  
// function() { 
//     alert("Ви скасували виконання."); } );

// function ask (question, yes, no) {
// if (confirm(question)) yes();
// else no(); 
// }
// ask (
//     "Ви згодні?", 
// () => alert("Ви погодились"),
// () => alert ("Ви скасували виконання") 
// );