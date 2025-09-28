// 생성자 - class 이름 그 자체로 런타임에서 함수로 존재
// 인스턴스 - new를 통해 만들어지는 객체, 생성자가 만들어낸 결과물

// 타입스크립트의 클래스
// 타입 세계(컴파일 시점): Developer라는 인스턴스 타입이 생긴다.
// 값 세계(런타임 시점): Developer라는 생성자 함수가 생성된다.

class Developer {
  name: string;
  domain: string;

  constructor(name: string, domain: string) {
    this.name = name;
    this.domain = domain;
  }
}

const me: Developer = new Developer("zig", "frontend");