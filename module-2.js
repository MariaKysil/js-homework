// task 1
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки
  let message;

  if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  return message;
  // Пиши код выше этой строки
}

// task 2
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Пиши код ниже этой строки

  if (password === ADMIN_PASSWORD) {
    return 'Добро пожаловать!';
  }
  return 'Доступ запрещен, неверный пароль!';

  // Пиши код выше этой строки
}

// task 3 // guard clause
function checkStorage(available, ordered) {
  // Пиши код ниже этой строки

  if (ordered === 0) {
    return 'В заказе еще нет товаров';
  }

  if (ordered > available) {
    return 'Слишком большой заказ, на складе недостаточно товаров!';
  }
  return 'Заказ оформлен, с вами свяжется менеджер';
  // Пиши код выше этой строки
}

// task 8
// Чаще всего, мы заранее в коде не знаем какая будет длина массива.
// Для того, чтобы получить значение последнего элемента применяется следующий подход - длина массива всегда на единицу больше,
// чем индекс последнего элемента.Используя формулу длина_массива - 1 можно получить значение последнего элемента массива произвольной длины.

const planets = ['Земля', 'Марс', 'Венера'];
const lastElementIndex = planets.length - 1;
planets[lastElementIndex]; // 'Венера'

const fruits = ['яблоко', 'персик', 'груша', 'банан'];
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// task 9
function getExtremeElements(array) {
  return [array[0], array[array.length - 1]];
  // return [];
  // array[0];
  // array[array.length - 1];
}

// Метод split(delimeter) позволяет превратить строку в массив,
// «разбив» его по разделителю delimeter. Если разделитель это пустая строка,
// то получится массив отдельных символов. Разделителем может быть один или несколько символов.

// task 10
function splitMessage(message, delimeter) {
  let words;
  // Пиши код ниже этой строки

  words = message.split(delimeter);

  // Пиши код выше этой строки
  return words;
}

// task 11
function calculateEngravingPrice(message, pricePerWord) {
  // Пиши код ниже этой строки

  let words;

  words = message.split(' ').length * pricePerWord;
  return words;

  // Пиши код выше этой строки
}

// task 12
function makeStringFromArray(array, delimeter) {
  let string;
  // Пиши код ниже этой строки

  string = array.join(delimeter);

  // Пиши код выше этой строки
  return string;
}

// task 13
function slugify(title) {
  const normalizedString = title.toLowerCase();
  const words = normalizedString.split(' ');
  const slug = words.join('-');
  return slug;
}

// task 14
const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];

const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice(1, -1);
const lastThreeEls = fruits.slice(-3);
// firstTwoEls - массив из первых двух элементов.
// nonExtremeEls - массив из всех элементов кроме первого и последнего.
// lastThreeEls - массив из трёх последних элементов.

// task 15
const firstArray = ['Меркурий', 'Венера', 'Земля'];
const secondArray = ['Марс', 'Юпитер'];
const thirdArray = ['Сатурн', 'Уран', 'Нептун'];
const allPlanets = firstArray.concat(secondArray, thirdArray);

console.log(firstArray); // ['Меркурий', 'Венера', 'Земля'];
console.log(allPlanets); // ['Меркурий', 'Венера', 'Земля', 'Марс', 'Юпитер', 'Сатурн', 'Уран', 'Нептун'];

// task 16
function makeArray(firstArray, secondArray, maxLength) {
  // Пиши код ниже этой строки
  return firstArray.concat(secondArray).slice(0, maxLength);
  // or
  // const newArray = firstArray.concat(secondArray);

  // if (newArray > maxLength) {
  //   return newArray.length === maxLength;
  // }
  // return newArray.slice(0, maxLength);
}

// task 18
function calculateTotal(number) {
  let total = 0;

  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;
}
// task 19
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}

const planets = ['Земля', 'Марс', 'Венера'];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
// Для доступа к элементам используется синтаксис квадратных скобок массив[индекс],
// где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.

// task 20
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (let i = 0; i < order.length; i++) {
    let addIndex = order[i];
    total += addIndex;
  }
  // Пиши код выше этой строки
  return total;
}
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (let i = 0; i < order.length; i++) {
    total += order[i];
  }
  // Пиши код выше этой строки
  return total;
}

// task 21
function findLongestWord(string) {
  // Пиши код ниже этой строки
  let longestWord = '';

  const words = string.split(' ');

  for (const el of words) {
    if (el.length > longestWord.length) {
      longestWord = el;
    }
  }
  return longestWord;

  // Пиши код выше этой строки
}

// task 22
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Пиши код ниже этой строки
  for (let i = min; i <= max; i += 1) {
    numbers.push(i);
  }
  // Пиши код выше этой строки
  return numbers;
}

// task 23

function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  let result = [];

  for (const number of numbers) {
    if (number > value) {
      result.push(number);
    }
  }

  return result;
  // Пиши код выше этой строки
}

// task 24
function checkFruit(fruit) {
  const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

  return fruits.includes(fruit); // Дополни эту строку
}

// task 25
function getCommonElements(array1, array2) {
  // Пиши код ниже этой строки

  let commonElements = [];

  for (let el of array1) {
    let isInSecondArray = array2.includes(el);
    if (isInSecondArray) {
      commonElements.push(el);
    }
  }
  return commonElements;

  // Пиши код выше этой строки
}

// task 26
function calculateTotalPrice(order) {
  let total = 0;
  // Пиши код ниже этой строки

  for (const el of order) {
    total += el;
  }
  // same
  for (let i = 0; i < order.length; i += 1) {
    total += order[i];
  }

  // Пиши код выше этой строки
  return total;
}

// task 27
function filterArray(numbers, value) {
  // Пиши код ниже этой строки
  const filteredNumbers = [];

  for (let number of numbers) {
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  // same
  for (let i = 0; i < numbers.length; i += 1) {
    const number = numbers[i];

    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
  // Пиши код выше этой строки
}

// task 28
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

// task 29
function getEvenNumbers(start, end) {
  // Пиши код ниже этой строки

  let evenNumbers = [];
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      evenNumbers.push(i);
    }
  }
  return evenNumbers;

  // Пиши код выше этой строки
}

// task 30
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// task 31
function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }

  // Пиши код выше этой строки
}

function findNumber(start, end, divisor) {
  // Пиши код ниже этой строки
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
      break;
    }
  }

  return number;
  // Пиши код выше этой строки
}

// task 32
function includes(array, value) {
  // Пиши код ниже этой строки
  for (let el of array) {
    if (el === value) {
      return true;
    }
  }

  return false;

  // Пиши код выше этой строки
}
