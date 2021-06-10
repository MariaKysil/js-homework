// examples of variables
const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
const isOnline = true;
const isAdmin = false;

// Важно запомнить правильное именование составляющих алгебраического выражения: +, -, * и / называются
// операторами, а то на чём они применяются(числа) - операнды.

// Базовый код
const pricePerItem = 3500;
const orderedQuantity = 4;

const totalPrice = pricePerItem * orderedQuantity;
console.log(pricePerItem * orderedQuantity);

// шаблонні строки
const productName = 'Droid';
const pricePerItem = 3500;

const message = `You chose ${productName}, price per item is ${pricePerItem} credits`;

// function
// Объявление функции начинается с ключевого слова function, за которым идёт её имя - глагол отвечающий на вопрос «Что сделать?»
// и пара круглых скобок. Тело функции заключено в фигурные скобки {} и содержит инструкции,
// которые необходимо выполнить при её вызове. Затем, когда необходимо, функция вызывается с помощью имени и пары круглых скобок.
function sayHi() {
  console.log('Hello, this is my first function!');
}

sayHi();

// another task
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

function multiply(x, y, z) {
  console.log('Код до return выполняется как обычно');

  // Возвращаем результат выражения умножения
  return x * y * z;

  console.log('Этот лог никогда не выполнится, он стоит после return');
}

// Результат работы функции можно сохранить в переменную
let result = multiply(2, 3, 5);
console.log(result); // 30

result = multiply(4, 8, 12);
console.log(result); // 384

result = multiply(17, 6, 25);
console.log(result); // 2550

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Write your code under this line

  const message = `You ordered droids worth ${
    orderedQuantity * pricePerDroid + deliveryFee
  } credits. Delivery (${deliveryFee} credits) is included in the order amount.`;

  // Write your code above this line
  return message;
}

function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Write your code under this line
  const isMatch = password === SAVED_PASSWORD;

  // Write your code above this line
  return isMatch;
}

function checkAge(age) {
  let message;

  if (age >= 18) {
    // Complete this line
    message = 'You are adult';
  } else {
    message = 'You are minor';
  }

  return message;
}

a += 2;
a = a + 2;
b -= 4;
b = b - 4;
c *= 3;
c = c * 3;
d /= 10;
d = d / 10;

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Write your code under this line
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = 'Not enough funds on the account!';
  } else {
    message = `You ordered ${orderedQuantity} droids, ${
      customerCredits - totalPrice
    } credits left on the account`;
  }
  // Write your code above this line
  return message;
}

// Конструкция if...else может проверить и среагировать на выполнение или невыполнение только одного условия.
// Блок else...if позволяет добавить после else еще один оператор if с условием.
// В конце цепочки может быть классический блок else, который выполнится только в случае, когда ни одно из условий не приведётся к true.
// При первом же удовлетворяющем условии проверки прекратятся и выполнится только тело соответствующего блока if.
// Поэтому подобную запись следует читать как: «ищу первое выполнение условия, игнорирую всё остальное».

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    // Complete this line
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    // Complete this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

function checkStorage(available, ordered) {
  let message;
  // Write your code under this line
  if (ordered === 0) {
    message = 'There are no products in the order yet';
  } else if (available < ordered) {
    message = 'The order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is placed, the manager will contact you';
  }
  // Write your code above this line
  return message;
}

// То есть логическое «И» запинается на лжи и возвращает то, на чём запнулось или последний операнд.
// Запомните шесть значений, которые в булевом преобразовании приводятся к
//   `false`: `0`, `NaN`, `null`, `undefined`, пустая строка`""` или`''` и само значение`false`.
// Абсолютно всё остальное приводится к`true`.

function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Complete this line

  return isInRange;
}

// То есть логическое «ИЛИ» запинается на правде и возвращает то, на чём запнулось или последний операнд.
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip'; // Complete this line

  return canAccessContent;
}

// Все операторы, которые мы рассматривали до этого, были бинарными.
// Т.е.они содержали два операнда: левый и правый.
// Логическое «НЕ» - это унарный оператор, выполняющий операцию над одним операндом справа.
// Оператор! приводит операнд к булю, если необходимо,
// а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Complete this line

  return isNotInRange;
}

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Write your code under this line
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  }

  // Write your code above this line
  return discount;
}

// тернарний оператор
let type;
const age = 20;

if (age >= 18) {
  type = 'adult';
} else {
  type = 'child';
}

// console.log(type); // 'adult'
// Выполним рефакторинг, заменив if...else тернарным оператором.
{
  /* <условие> ? <выражение если условие истинно> : <выражение если условие ложно> */
}

const age = 20;
const type = age >= 18 ? 'adult' : 'child';
console.log(type); // 'adult'

function checkStorage(available, ordered) {
  let message;
  // Write your code under this line

  message =
    ordered < available
      ? 'The order is placed, the manager will contact you'
      : 'Not enough goods in stock!';

  if (ordered > available) {
    message = 'Not enough goods in stock!';
  } else {
    message = 'The order is placed, the manager will contact you';
  }

  // Write your code above this line
  return message;
}

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Write your code under this line
  message =
    password === ADMIN_PASSWORD
      ? 'Access is allowed'
      : 'Access denied, wrong password!';
  // Write your code above this line
  return message;
}

// то саме
if (type === 'starter') {
  price = 0;
} else if (type === 'professional') {
  price = 20;
} else if (type === 'organization') {
  price = 50;
}
function getSubscriptionPrice(type) {
  let price;
  // Write your code under this line
  // То есть нельзя сравнить на больше или меньше, только на равенство.
  switch (
    type // Complete this line
  ) {
    case 'starter': // Complete this line
      price = 0; // Complete this line
      break;

    case 'professional': // Complete this line
      price = 20; // Complete this line
      break;

    case 'organization': // Complete this line
      price = 50; // Complete this line
      break;
  }

  // Write your code above this line
  return price;
}
// то саме

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;

    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;

    default:
      message = 'Access denied, wrong password!';
  }
  return message;
}

function getShippingCost(country) {
  let message;
  // Write your code under this line

  switch (country) {
    case 'China':
      message = 'Shipping to China will cost 100 credits';
      break;

    case 'Chile':
      message = 'Shipping to Chile will cost 250 credits';
      break;

    case 'Australia':
      message = 'Shipping to Australia will cost 170 credits';
      break;

    case 'Jamaica':
      message = 'Shipping to Jamaica will cost 120 credits';
      break;

    default:
      message = 'Sorry, there is no delivery to your country';
  }
  // Write your code above this line
  return message;
}

const productName = 'Ремонтный дроид';

// Если в переменной хранится строка
console.log(productName.length); // 15

// Если строковый литерал
console.log('Ремонтный дроид'.length); // 15

const courseTopic = 'JavaScript for beginners';
// Write your code under this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Complete this line

  return substring;
}

function formatMessage(message, maxLength) {
  let result;
  // Write your code under this line
  if (message.length <= maxLength) {
    result = message;
  } else {
    result = message.slice(0, maxLength) + '...';
  }
  // Write your code above this line
  return result;
}
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Complete this line
  return result;
}
const productName = 'Ремонтный дроид';

console.log(productName.includes('н')); // true
console.log(productName.includes('Н')); // false
console.log(productName.includes('дроид')); // true
console.log(productName.includes('Дроид')); // false
console.log(productName.includes('Ремонтный')); // true
console.log(productName.includes('ремонтный')); // false

function checkForSpam(message) {
  let result;
  // Write your code under this line

  message = message.toLowerCase();

  if (message.includes('spam') || message.includes('sale')) {
    result = true;
  } else {
    result = false;
  }

  // Write your code above this line
  return result;
}
