//basic type
let ida: number = 45;
let company: string = "ALi";
let isTrue: Boolean = true;
let x: any = "hello";

let ids: number[] = [1, 2, 3];
let arr: any[] = [1, "a", true];

//tuple
let person: [number, string, boolean] = [1, "ali", true];

//tuple Array
let employee: [number, string][];

employee = [
  [1, "ali"],
  [1.3, "ali"],
  [3, "alex"],
];

//Union

let pid: string | number;
pid = 22;
pid = "22";

//eum
enum Direction1 {
  up = 3,
  Down,
  left,
  Right,
}

//object
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

//Type Assertion
let cid: any = 1;
let customerId = <number>cid;
//or
let customerId2 = cid as number;

//function
function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

//interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// readonly id will not work as its readonly
//user1.id = 22;

type Point = number | string;
const p1: Point = 1;
//not work | with interface
//interface Point = number | string;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
