/* FUNCTION TYPES */
function add(x: number, y: number) {
  if (x == 0) {
    return "invalid";
  }
  return x + y;
}

// OPtional parameter
function makeName(firstName: string, lastName: string, middleName?: string) {
  if (middleName) return firstName + " " + middleName + " " + lastName;
  return firstName + " " + lastName;
}
const fullName = makeName("Naruto", "Uzumaki");

// Default parameter
function makeName1(firstName: string, lastName: string, middleName = "Kumar") {
  if (middleName) return firstName + " " + middleName + " " + lastName;
  return firstName + " " + lastName;
}
const fullName1 = makeName1("Naruto", "Uzumaki");

// Function takess function as parameter

function mul(x: number, y: number): number {
  return x * y;
}

function div(x: number, y: number): number {
  return x / y;
}

function applyFunc(
  funcs: ((a: number, b: number) => number)[],
  values: [number, number][]
): number[] {
  const results = [] as number[];
  for (let i = 0; i < funcs.length; i++) {
    const args = values[i];
    const result = funcs[i](args[0], args[1]);
    results.push(result);
  }
  return results;
}

applyFunc(
  [mul, div],
  [
    [1, 2],
    [4, 5],
  ]
);
