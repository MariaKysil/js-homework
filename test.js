// // const fnA = function (a, b, callback) {
// //   const result = callback(a, b);
// //   console.log(result);
// // };

// // const add = function (x, y) {
// //   return x + y;
// // };

// // fnA(6, 9, add);

// function filter(array, test) {
//   const filteredArray = [];

//   for (const element of array) {
//     console.log(element);

//     const passed = test(element);
//     if (passed) {
//       filteredArray.push(element);
//     }
//   }

//   return filteredArray;
// }
// // function callback(value) {
// //   return value >= 2;
// // }
// // const result = filter([1, 2, 3, 4, 5], callback);

// // console.log(result);

// const fruits = [
//   { name: 'banana', quantity: 120, isFresh: true },
//   { name: 'apple', quantity: 200, isFresh: false },
//   { name: 'grapes', quantity: 300, isFresh: true },
// ];

// const getQuantity = function (fruit) {
//   return fruit.quantity > 200;
// };

// const result1 = filter(fruits, getQuantity);
// // console.log(result1);

const array = [1, 2, 3, 4, 5];

array.forEach(function (element) {
  // console.log(element);
});

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки

  for (let i = 0; i < orderedItems.length; i += 1) {
    totalPrice += orderedItems[i];
  }

  orderedItems.forEach(function (element) {
    totalPrice += element;
  });
  // Пиши код выше этой строки
  return totalPrice;
}

const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach(number => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  return filteredNumbers;
};

filterArray([3, 66, 7, 333, 55, 4], 54);
// console.log(filterArray([3, 66, 7, 333, 55, 4], 54));

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach(element => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
};

// console.log(
// getCommonElements([1, 4, 666, 777, 433, 22, 44], [666, 777, 22, 4, 6666, 44]),
// );

function changeEven(numbers, value) {
  // Пиши код ниже этой строки

  const newArray = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
    }
  }
  return newArray;
  // Пиши код выше этой строки
}
// console.log(changeEven([17, 24, 68, 31, 42], 100));

const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// Пиши код ниже этой строки
const planetsLengths = planets.map(planets => planets.length);
// console.log(planetsLengths);

const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
  return acc + player.playtime / player.gamesPlayed;
}, 0);

console.log(totalAveragePlaytimePerGame);
