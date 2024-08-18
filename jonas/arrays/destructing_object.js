/** @format */

"use strict";

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

restaurant.orderDelivery({
  time: "22:30",
  address: "Via del sole, 21",
  mainIndex: 2,
  staterIndex: 2,
});

// for object use use {}

const { Name, openingHours, categories } = restaurant;
console.log(Name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
//
// const {
//   menu: [],
//   starterMenu: starter = [],
// } = restaurant;
// console.log(menu, starter);

//mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// very important
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
