/* OOP : Classes and Abstract classes  */
class Person {
  // name: string;
  // private name: string;
  // By making a method private, you tell other programmers that this method is not intended to be accessed directly.
  // By default its public and accessible.
  protected name: string;
  // Protected specifies access to class members in the member-list up to the next access specifier(public or private) or the end of the class definition
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  getName() {
    return this.name;
  }
  setName(name: string) {
    this.name = name;
  }
}

// Protected
class Employee extends Person {
  callMe() {
    console.log(this.name);
  }
}

const p1 = new Person("Naruto");
// p1.name = "Itachi";
// p1.getName();

/* ABSTRACT CLASS */
// Abstract class is a restricted class that cannot be used to create objects and designed to be specifically used as a base class.

abstract class Animal {
  abstract makeSound(duration: number): void;
  move(duration: number) {
    console.log("Moving along.......");
    this.makeSound(duration);
  }
}
// Abstract class is meant to act as a base class that will be inherited from by a subclass.

class Dog extends Animal {
  makeSound(duration: number) {
    console.log("woof woof");
  }
}
class Cat extends Animal {
  makeSound(duration: number) {
    console.log("meow meow");
  }
}

const dog = new Dog();
dog.move(10);

// Any abstract method is typically gonna be utilized by a concrete implementation in the abstarct class
