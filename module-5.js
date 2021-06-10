// task 1
// То есть прототип - это резервное хранилище свойств и методов объекта, автоматически используемое при их поиске.
// У объекта, который выступает прототипом может также быть свой прототип, у того свой, и так далее.
const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};

const child = Object.create(parent);

child.name = 'Jason';
child.age = 27;

// task 2
const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};

const parent = Object.create(ancestor);
parent.name = 'Stacey';
parent.surname = 'Moore';
parent.age = 54;

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

// task 3
// Синтаксис литерала объекта позволяет создать один объект.Но часто нужно создать много однотипных объектов с одинаковым набором свойств,
//     но разными значениями, и методами для взаимодействия со свойствами.Всё это нужно сделать динамически,
//     во время выполнения программы.Для этого используют функции - конструкторы, вызывая их при помощи специального оператора new.
function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const audi = new Car('Audi', 'Q3', 36000);
console.log(audi);

const bmw = new Car('BMW', 'X5', 58900);
console.log(bmw);

const nissan = new Car('Nissan', 'Murano', 31700);
console.log(nissan);

// task 4
// Функции - конструкторы всегда принимают большое количество входных данных для свойств будущего объекта.
//     Поэтому, к ним также можно применить паттерн «Объект настроек», передавая один объект с логично именованными свойствами, вместо несвязанного набора аргументов.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// const poly = new User({ name: 'Поли', email: 'poly@mail.com' });

function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

const audi = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
console.log(audi);

const bmw = new Car({ brand: 'BMW', model: 'X5', price: 58900 });
console.log(bmw);

const nissan = new Car({ brand: 'Nissan', model: 'Murano', price: 31700 });
console.log(nissan);

// // task 5
// // Мы уже знаем что такое прототип объекта, свойство __proto__ и как происходит поиск отсутствующих свойств
// объекта по цепочке прототипов.Во время вызова функции - конструктора через new и создания нового объекта со свойствами,
//     ему также устанавливается прототип.

// // У каждой функции, кроме стрелочных, есть свойство prototype, значение которого это объект с единственным свойством constructor,
// указывающим на саму функцию - конструктор.

// // function User() {}
// // console.log(User.prototype); // { constructor: User }
// // При вызове функции-конструктора и создании объекта через new, объект в свойстве prototype функции-конструктора
// будет прототипом создаваемого объекта.

// // const mango = new User();
// // console.log(User.prototype.isPrototypeOf(mango)); // true
// // В свойство prototype можно записывать свойства и методы, которые будут доступны всем объектам созданным этой функцией-конструктором.
// Методы в prototype будут вызываться объектами созданными функцией - конструктором, поэтому для доступа к свойствам вызываемого
// объекта в методах используется ключевое слово this.

// // function User({ name, email }) {
// //   this.name = name;
// //   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// console.log(mango.getEmail()); // mango@mail.com
// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
function Car({ brand, model, price }) {
  this.brand = brand;
  this.model = model;
  this.price = price;
}

Car.prototype.getPrice = function () {
  return this.price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

// task 6
function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function () {
  return this.items;
};

Storage.prototype.addItem = function (newItem) {
  return this.items.push(newItem);
};

Storage.prototype.removeItem = function (item) {
  let itemIndex = this.items.indexOf(item);
  return this.items.splice(itemIndex, 1);
};

const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// task 7
function StringBuilder(baseValue) {
  this.value = baseValue;

  StringBuilder.prototype.getValue = function () {
    return this.value;
  };

  StringBuilder.prototype.padEnd = function (str) {
    return (this.value += str);
  };

  StringBuilder.prototype.padStart = function (str) {
    return (this.value = str + this.value);
  };

  StringBuilder.prototype.padBoth = function (str) {
    this.padStart(str);
    this.padEnd(str);
  };
}

const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// task 9
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

// task 10
// В функции - конструкторе объявление методов для работы со свойствами экземпляра делается явно, путём обращения к свойству prototype
// и добавления на него методов.

// function User({ name, email }) {
//   this.name = name;
//   this.email = email;
// }

// User.prototype.getEmail = function () {
//   return this.email;
// };

// User.prototype.changeEmail = function (newEmail) {
//   this.email = newEmail;
// };
// В классах используется более удобный синтаксис методов класса, который за ширмой делает тоже самое - добавляет методы
// на свойство User.prototype.Поэтому в самом начале мы говорили что классы это просто синтаксический сахар - удобная надстройка над функциями - конструкторами.

// class User {
//   constructor({ name, breed }) {
//     this.name = name;
//     this.breed = breed;
//   }

//   // Аналог User.prototype.getEmail
//   getEmail() {
//     return this.email;
//   }

//   // Аналог User.prototype.changeEmail
//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  getPrice() {
    return this.price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

// task 11
// Инкапсуляция - это концепция позволяющая скрыть внутренние детали класса.Пользователь класса должен получать доступ только
// к публичному интерфейсу - набору публичных свойств и методов класса.

// В классах инкапсуляция реализуется приватными свойствами, доступ к которым можно получить только внутри класса.
// Это одно из отличий классов и функций - конструкторов - в классах легко объявить приватные свойства.

// Допустим почта пользователя должна быть недоступна из вне, то есть приватна.Добавляя к имени свойства символ # мы делаем его приватным.
// Объявление приватного свойства до инциализации в конструкторе - обязательно.

// class User {
//   // Необязательное объявление публичных свойств
//   name;
//   // Обязательное объявление приватных свойств
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   getEmail() {
//     return this.#email;
//   }

//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });

// mango.changeEmail('mango@supermail.com');
// console.log(mango.getEmail()); // mango@supermail.com
// console.log(mango.#email); // Будет ошибка, это приватное свойство
// Методы класса также могут быть приватными, то есть доступны только в теле класса. Для этого перед их именем необходимо поставить символ #.
class Car {
  #brand;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.model = model;
    this.price = price;
  }

  getBrand() {
    return this.#brand;
  }

  changeBrand(newBrand) {
    this.#brand = newBrand;
  }
}

// task 12
class Storage {
  #items;

  constructor(items) {
    this.#items = items;
  }

  getItems() {
    return this.#items;
  }

  addItem(newItem) {
    this.#items.push(newItem);
  }

  removeItem(item) {
    const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  }
}

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// task 13
class StringBuilder {
  #value;

  constructor(baseValue) {
    this.#value = baseValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    this.#value += str;
  }

  padStart(str) {
    this.#value = str + this.#value;
  }

  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  }
}
// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='

// task 14
// Мы объявили геттер и сеттер email поставив перед именем свойства ключевые слова get и set.
// Внутри этих методов мы или возвращаем значение приватного свойства #email или изменяем его значение.
// Геттер и сеттер идут в паре и должны называться одинаково.

// const mango = new User({ name: 'Манго', email: 'mango@mail.com' });
// console.log(mango.email); // mango@mail.com
// mango.email = 'mango@supermail.com';
// console.log(mango.email); // mango@supermail.com
// При обращении к mango.email вызывается геттер get email() {... } и выполняется его код.
// При попытке записи mango.email = 'mango@supermail.com' вызывается сеттер set email(newEmail) {... } и строка 'mango@supermail.com'
// будет значением параметра newEmail.

// Плюс в том, что это методы, а значит при записи можно выполнить дополнительный код, например с какими - то проверками,
//   в отличии от выполнениях этой же операции напрямую со свойством.

// set email(newEmail) {
//   if(newEmail === '') {
//     console.log('Ошибка! Почта не может быть пустой строкой!');
//     return;
//   }

//   this.#email = newEmail;
// }
class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}

// task 15
// Кроме публичных и приватных свойств будущего экземпляра, в классе можно объявить его собственные свойства, доступные только классу,
//   но не его экземплярам - статические свойства(static).Они полезны для хранения информации относящейся к самому классу.
class Car {
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice <= Car.MAX_PRICE) {
      this.#price = newPrice;
    }
  }
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000

// class 16
// Особенность статических методов в том, что во время их вызова ключевое слово this ссылается на сам класс.
// Это значит, что статический метод может получить доступ к статическим свойствам класса, но не к свойствам экземпляра.
//   Логично, потому что статические методы вызывает сам класс, а не его экземпляры.
class Car {
  static #MAX_PRICE = 50000;
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return 'Внимание! Цена превышает допустимую.';
    }
    return 'Всё хорошо, цена в порядке.';
  }

  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.

// task 17
// Класс ContentWriter наследует от класса User его конструктор, геттер и сеттер email,
//   а также одноимённое публичное свойство.Важно помнить, что приватные свойства и методы класса - родителя не наследуются классом - ребёнком.

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
// Пиши код ниже этой строки
class Admin extends User {
  static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
}

// // task 18
// Первым делом в конструкторе дочернего класса необходимо вызвать специальную функцию super(аргументы) -
//   это псевдоним конструктора родительского класса.В противном случае, при попытке обратиться к this в конструкторе дочернего клаcса,
//   будет ошибка.При вызове конструктора класса родителя передаём необходимые ему аргументы для инициализации свойств.
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
  accessLevel;

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  constructor({ email, accessLevel }) {
    super(email, accessLevel);
    this.accessLevel = accessLevel;
  }
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser

// task 19
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
  // Пиши код ниже этой строки

  blacklistedEmails = [];

  blacklist(email) {
    this.blacklistedEmails.push(email);
  }

  isBlacklisted(email) {
    return this.blacklistedEmails.includes(email);
  }

  static AccessLevel = {
    BASIC: 'basic',
    SUPERUSER: 'superuser',
  };

  accessLevel;

  constructor({ email, accessLevel }) {
    super(email);
    this.accessLevel = accessLevel;
  }

  // Пиши код выше этой строки
}

const mango = new Admin({
  email: 'mango@mail.com',
  accessLevel: Admin.AccessLevel.SUPERUSER,
});

console.log(mango.email); // mango@mail.com
console.log(mango.accessLevel); // superuser
mango.blacklist('poly@mail.com');
console.log(mango.blacklistedEmails); // 'poly@mail.com'
console.log(mango.isBlacklisted('mango@mail.com')); //  false
console.log(mango.isBlacklisted('poly@mail.com')); // true
