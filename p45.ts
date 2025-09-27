interface Pet {
  name: string;
}

let cat = { name: "Zag", age: 2 };

function greet1(pet: Pet) {
  console.log("Hello " + pet.name);
}

greet1(cat);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Developer {
  name: string;
  age: number;
  sleepTime: number;

  constructor(name: string, age: number, sleepTime: number) {
    this.name = name;
    this.age = age;
    this.sleepTime = sleepTime;
  }
}

function greet2(p: Person) {
  console.log(`Hello, I'm ${p.name}`);
}

const developer = new Developer("zig", 20, 8);

greet2(developer);