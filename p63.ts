interface Person {
  first: string;
  last: string;
}

const person: Person = { first: "zig", last: "song" };

function email(options: { person: Person; subject: string; body: string }) {}

// 런타임에서의 typeof
const v1 = typeof person;
const v2 = typeof email;

console.log(v1, v2); // object function

// 타입 시스템에서의 typeof
type T1 = typeof person;
type T2 = typeof email;