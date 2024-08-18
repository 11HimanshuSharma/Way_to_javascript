/** @format */

const rest1 = {
  name: "Capri",
  numGuests: 20,
};

const rest2 = {
  name: "La Piazza",
  // owner: "Himanshu",
};

rest2.numGuests = rest1.numGuests || 10;
console.log(rest2.numGuests);

rest2.numGuests ||= 10;

//nullish assigment operator (null or undefined) (not 0 and '')
rest2.numGuests ??= 10;
rest1.numGuests ??= 10;

rest2.owner = rest2.owner && "<ANONYMOUS";

rest2.owner &&= "<ANONYMOUS";
