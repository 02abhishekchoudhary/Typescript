/* ADVANCE FUNCTION TYPES */

// rest paramter
function sum(...numbers: number[]) {}
sum(1, 2, 3);
sum();
sum(1, 2, 3, 4, 5, 6);

// Overloaded functions: is a function that has different call signatures and can accept different types
function getItemLength(name: string): number;
function getItemLength(name: string[]): number;
function getItemLength(nameOrNames: unknown): number {
  if (typeof nameOrNames === "string") {
    return nameOrNames.length;
  } else if (Array.isArray(nameOrNames)) {
    return nameOrNames.length;
  }
  return 0;
}

getItemLength("");
getItemLength(["", ""]);
