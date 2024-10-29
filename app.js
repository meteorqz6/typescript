// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'lee';
var age = 20;
var gender = 'male';
var course = 'Typescript';
var completed = false;
var GenderType;
(function (GenderType) {
    GenderType[GenderType["Male"] = 0] = "Male";
    GenderType[GenderType["Female"] = 1] = "Female";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = 'park';
        this.age = 30;
        this.gender = 'male';
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
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
var anyVal = 100;
anyVal = 200;
anyVal = '200';
var numStr = 100;
function convertToString(val) {
    return String(numStr);
}
function convertToNumber(val) {
    return Number(val);
}
console.log(convertToString(numStr)); // '100'
console.log(convertToNumber(numStr)); // 100
