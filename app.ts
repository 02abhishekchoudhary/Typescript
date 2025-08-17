/* OPTIONAL CHAINING AND BANG  */
// Question mark and Exclamation point operators allows us to check and deal with undefined values within Typescript

// ?
// checking and then move forward
const arr = [{ name: "Naruto" }, { name: "Itachi" }, { name: "Kakashi" }];
// const el = arr.pop().name;
const el = arr.pop()?.name;

const arr2 = [[{ name: "Itachi Uchia" }]];
const el2 = arr2.pop()?.pop()?.name;

// ! (bang)
// Forcing us to move forward
// bang operator tells the compiler to ignore the possibility of it being undefined
const arr3 = [[{ name: "Itachi Uchia" }]];
const el3 = arr2.pop()!.pop()!.name;
