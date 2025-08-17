/* Array & Tuples */

// ARRAY
var arr = [1, 2, 3, "hello"];
var numArr: number[] = [1, 2, 3];
var strArr: string[] = ["a", "b", "c"];

// Nested array

var nestedArr: string[][] = [["a"], ["b"], ["c"]];
var anyTypeArr = [];

// TUPLES : is a fixed length array that has defined for each position in the array.
const coord: [number, number] = [1, 2];
const coord2: [number, string] = [1, "2"];
const coord3: [number, number, number] = [1, 2, 3];
console.log(coord[1]);

const coords: [number, number][] = [
  [1, 2],
  [3, 4],
];

coords[0][1];
