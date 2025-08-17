/* ANY, UNKNOWN & TYPE CASTS */

// ANY: type allows for flexible typing but sacrifices type ssafety as it lacks compile-time type checking.
let x: any = 1;
x();
x.length;

let y: number = 1;
y.length; // Error because length method is not for number types

// Use any type typically when you're in a very complex situation and you're not able to predict what the type of the variables gonna be.

// UNKnown type is a type safe counterpart of the any type
// Unknown type provides a powerful way to handle values of uncertain types while maintaining type safety

let a: unknown = 1;
if (typeof a == "number") {
  const result = a + 1;
} else if (typeof a == "string") {
  const result = x.length;
}

// TYPE CAST
let b: unknown = 1;
const result = (x as number) + 1;
const result1 = (x as string).length;
const result12 = (x as number[][])[0][1]; // Crash at runtime because x is not as this type

// Any type use

function processFeeedback(input: any): void {
  // Assume we can perform any operation without explicit type checks
  console.log(`Processing: ${input}`);
}

// This can be a string, number, file etc
processFeeedback("Hello"); // Works
processFeeedback(5); // Works
processFeeedback(new Blob()); // Works

// Unknown type use
function processFeeedbackUnknown(input: unknown): void {
  if (typeof input === "string") {
    console.log(`Processing text: ${input}`);
  } else if (typeof input === "number") {
    console.log(`Processing rating: ${input}`);
  } else if (input instanceof Blob) {
    console.log(`Processing file`);
  } else {
    console.log("Unsupported type of input");
  }
}

processFeeedbackUnknown("Hello");
processFeeedbackUnknown(5);
processFeeedbackUnknown(new Blob());
processFeeedbackUnknown([1, 2, 3]);
