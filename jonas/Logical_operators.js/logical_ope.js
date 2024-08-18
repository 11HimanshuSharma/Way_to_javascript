/** @format */

"use strict";

// use any data type
// return any data type
// short-circuiting if first is true then it will return true or that value.
// then it will short circuit

console.log(3 || "Himanshu"); // 3
console.log("" || "Himanshu");
console.log(true || 0);
console.log(false || 0);
console.log(undefined || null);
// it will continue till we get true

console.log(undefined || 0 || "" || "Hello" || 23);

console.log("_---------AND-------------");

console.log(1 && "Himanshu");
console.log(7 && "Himanshu");

// it will continue till we get false

console.log("hello" && 23 && null && "himanshu");
