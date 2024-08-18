/** @format */
"use strict";

//spread, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

//REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log();

const restaurant = {
  Name: "classico Italiano",
  location: "Via angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Bruschetta", "Garlic", "Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};

//1 destructing
console.log(restaurant);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

//rest must be last
// const [pizza, , risotto, ...otherFood, other] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2 funcations
// const add = function (...numbers) {
//   int sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(4, 3, 6, 3, 6, 2);
