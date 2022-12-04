"use strict";
//watch?v=BCg4U1FzODs reference help
//basic type
let ida = 45;
let company = "ALi";
let isTrue = true;
let x = "hello";
let ids = [1, 2, 3];
let arr = [1, "a", true];
//tuple
let person = [1, "ali", true];
//tuple Array
let employee;
employee = [
    [1, "ali"],
    [1.3, "ali"],
    [3, "alex"],
];
//Union
let pid;
pid = 22;
pid = "22";
const user = {
    id: 1,
    name: "John",
};
//Type Assertion
let cid = 1;
let customerId = cid;
//or
let customerId2 = cid;
//function
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "John",
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now register`;
    }
}
const ali = new Person(1, "ali");
//subclass
class Employee extends Person {
    position;
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "alex", "Dev");
//generics
function getArray(items) {
    return new Array().concat(items);
}
let num = getArray([1, 2, 3, 4, 5]);
let str = getArray(["brad", "asd", "ali"]);
//hum mmmm
num.push("Hello");
//
function getArray2(items) {
    return new Array().concat(items);
}
let num2 = getArray2([1, 2, 3, 4, 5]);
let str2 = getArray2(["brad", "asd", "ali"]);
//will not work
//num2.push("Hello");
//=================================================
//=================================================
//watch?v=d56mG7Dez reference help
let sales = 123_456_798;
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity;
