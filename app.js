"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* STATIC ATTRIBUTES & METHODS */
class Dog {
    static instaceCount = 0;
    name;
    constructor(name) {
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
//# sourceMappingURL=app.js.map