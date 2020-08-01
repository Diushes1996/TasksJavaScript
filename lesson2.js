// Выведите по отдельности a,b,e

let str = 'abcde';

alert(str[0]);
alert(str[1]);
alert(str[4]);

// Посчитайте сколько секунд в минуте, часе, сутках.

let sec = 1;
let min = 60 * sec;
let hour = 60 * min;
let day = 24 * hour;

alert(day);

// Замените операторы

var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;

let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;

// Создайте переменные str1='Привет, ' и str2='Мир!'. С помощью этих переменных и операции сложения строк выведите на экран фразу 'Привет, Мир!'.

str1='Привет' ;
str2='Мир!';
let res = str1 + ' ' + str2;
alert(res);

// Создайте переменную name и присвойте ей ваше имя. Выведите на экран фразу 'Привет, %Имя%!'.

let name = 'Andrew';
let age = '24';
let res = `Privet, ${name}`;
let res = `I'm ${name}, i'm ${age}`;
alert(res);

// Спросите имя пользователя с помощью методы prompt. Выведите с помощью alert сообщение 'Ваше имя %имя%'.

let name = prompt('What is your name?');
alert(`You is ${name}`);

// Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.

let count = prompt('Загадайте число');
alert(count*count);

// Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.

let num = '12345';
let res = num[0] * num[1] * num[2] * num[3] * num[4];
alert(res);
