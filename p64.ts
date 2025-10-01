class Developer {
  name: string;
  sleepingTime: number;

  constructor(name: string, sleepingTime: number) {
    this.name = name;
    this.sleepingTime = sleepingTime;
  }
}

const d = typeof Developer;
console.log(d); // function

type T = typeof Developer;

const zig: Developer = new Developer("zig", 7);
type ZigType = typeof zig;