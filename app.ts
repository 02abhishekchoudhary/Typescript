/* Classes & Interfaces */
interface Animal {
  speak(): void;
}

class Dog implements Animal {
  private name: string;
  private color: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }

  speak() {
    console.log(`I am ${this.name} and I am ${this.color}`);
  }

  test() {
    return 1;
  }
}

// const dog: Animal = new Dog("Pakun", "Brown");

class Cat implements Animal {
  speak() {
    console.log("meow");
  }
}

const dog = new Dog("Pakun", "Brown");
const cat = new Cat();

const animals: Animal[] = [cat, dog];

function makeSound(animal: Animal) {
  animal.speak();
}
makeSound(cat);

// Use an interface when there's no functionality that you want to define concretely
// By using an abstract class, you are going to be writing a behavior that will be reuse by one of the concrete classes.
