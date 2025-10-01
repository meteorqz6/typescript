let value: string;
console.log(value); // undefined

type Person = {
  name: string;
  job?: string;
};

const person: Person = { name: "zig" };
console.log(person.job); // undefined