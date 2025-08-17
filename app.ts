/* STATIC ATTRIBUTES & METHODS */
class Dog {
  static instaceCount: number = 0;
  name: string;

  constructor(name: string) {
    Dog.instaceCount++;
    this.name = name;
  }
  static decreaseCount() {
    this.instaceCount--;
  }
}

const dog1 = new Dog("Pakun");
console.log(Dog.instaceCount);
const dog2 = new Dog("Pakun");
console.log(Dog.instaceCount);
Dog.decreaseCount();
console.log(Dog.instaceCount);
