// 구조적 타이핑
// 서로 다른 두 타입 간의 호환성은 오로지 타입 내부의 구조에 의해 결정
interface Pet {
  name: string;
}

interface Cat {
  name: string;
  age: number;
}

let pet: Pet;
let cat: Cat = { name: "Zag", age: 2 };

pet = cat;