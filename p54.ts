// 타입과 변수를 같은 이름으로 정의할 수 있다.
// 값 공간과 타입 공간의 이름은 충돌하지 않기 때문이다.

type Developer = { isWorking: true };
const Developer = { isTyping: true };

type Cat = { name: string; age: number };
const Cat = {slideStuffOffTheTable: true };