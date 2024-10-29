// 변수의 데이터 타입 명시
let stdId : number = 1111;
let stdName : string = 'lee';
let age : number = 20;
let gender : string = 'male';
let course : string = 'Typescript';
let completed : boolean = false;

enum GenderType{
    Male,
    Female
}

interface Student{
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : 'male' | 'female';
    course? : string;
    completed? : boolean;
    // setName(name : string) : void;
    setName : (name : string) => void;
    // getName : () => string;
}

class MyStudent implements Student{
    stdId = 91011;
    stdName = 'park';
    age = 30;
    gender : 'male' | 'female' = 'male';
    course = 'node.js';
    completed = true;

    setName(name: string): void{
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }
}

const myInstance = new MyStudent();
myInstance.setName('엘리스');

// function getInfo(id : number) : Student{
//     return {
//         stdId : id,
//         stdName : 'lee',
//         age : 20,
//         gender : 'female',
//         course : 'javascript',
//         completed : true
//     };
// }

// let std = {
//     stdId : 91011,
//     stdName : 'park',
//     age : 30,
//     gender : 'male',
//     course : 'node.js',
//     completed : true
// };

// function setInfo(student : Student) : void{
//     console.log(student);
// }

// setInfo(std);

// console.log(getInfo(5678));

// 함수의 데이터 타입 명시(매개변수, 리턴타입)
// function Plus(a : number, b : number) : number{
//     return a + b;
// }

let anyVal : any = 100;
anyVal = 200;
anyVal = '200';

let numStr : number | string = 100;

function convertToString(val : number | string) : string{
    return String(numStr);
}

function convertToNumber(val : number | string) : number{
    return Number(val);
}

console.log(convertToString(numStr)); // '100'
console.log(convertToNumber(numStr)); // 100