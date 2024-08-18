/** @format */

let numGuests = 0;

const Guests = numGuests || 10;
console.log(Guests);

// Nullist:null and undefined (Not 0 or '')
const guestCorrect = numGuests ?? 10;
console.log(guestCorrect);

// similar to or operator
