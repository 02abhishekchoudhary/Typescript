/* Interfaces */
// Interfaces is a programming structure/syntax that allows the computer to enforxe certain properties on an object(class)

interface Person {
  name: string;
  age: number;
  height?: number;
  // hello: () => void;
}

const person: Person = {
  name: "Naruto",
  age: 21,
  // hello: function () {
  //   console.log(this.name + " says hi");
  // },
};
// person.hello();

// Interfaces allows us to interact with more complex objects and understand what properties they have.

interface Employee extends Person {
  eID: number;
}

const worker: Employee = {
  name: "Itachi",
  age: 21,
  height: 175,
  eID: 4,
};

function getPerson(p: Person): Person {
  return {
    name: "Naruto",
    age: 21,
  };
}
