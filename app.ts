/* LITERALS AND ENUMS */

// Literal is a textual representation (notation) of a value as it is written in source code
let direction: "north" | "south" | "east" | "west";

let responseCode: 200 | 404 | 402;

// Enums: enables developers to establish a collection of named constants (enumerators), each linked with an integer value.
// numeric enums:

enum Size {
  Smallest = 100,
  Medium,
  Large,
}

var size: Size = Size.Smallest;

if (size === Size.Smallest) {
}

// String enums

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

enum Description {
  SmallText = "this is some small text",
}
console.log(Description.SmallText);

// Enums are treated as data types, and you can use them to create sets of constants for use with variables and properties.
var value = Direction;
