// instanceof - 자바스크립트의 연산자
// 어떤 객체가 클래스로부터 만들어졌는지 확인할 때 사용

class Person {}
class Developer extends Person {}

const p = new Person();
const d = new Developer();

console.log(p instanceof Person); // true
console.log(d instanceof Developer); // true
console.log(d instanceof Person); // true
console.log(p instanceof Developer); // false

// 타입스크립트에서 타입 좁히기 용도로 사용

// if (변수 instanceof 클래스명) {
//   변수의 타입이 클래스명으로 좁혀짐
// }

function handleError(e: unknown) {
  if (e instanceof Error) {
    console.log(e.message);
  } else {
    console.log("알 수 없는 에러");
  }
}