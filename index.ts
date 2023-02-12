// bacic types
let id: number = 5;
let myName: string = "sanni";
let healthAndWealth: boolean = true;

// array
let ids: number[] = [1, 2, 4, 5, 6, 7]; // can only accept number data type in the array
let arr: any[] = [1, false, "string", { name: "tolu" }, ["cooking", "eating"]]; // type an can accept any data type in an array

// Tupple
let person: [number, string, boolean] = [1, "sanni", true]; // setting the data type in the array in this paticular order depending on the types you set

// Tuple Array
let employee: [number, string][];
// 👇👇
employee = [
  [1, "sanni"],
  [2, "bola"],
  [3, "tola"],
];

// union
let pid: string | number;
// 👇👇
pid = 22;
pid = "tola";

// enum
enum Direction1 {
  Up, // default: 0
  Down, // 1
  Left, // 2
  Right, // 3
} //  default value is 0 then the rest would be in acending order

// object
const user: {
  id: number;
  name: string; // setting the type
} = {
  id: 1,
  name: "sanni",
};

type dataType = {
  id: number;
  name: string;
}; // can also be used to set a data type of an object
//              👇

const User1: dataType = {
  // using type
  id: 4,
  name: "sanni",
};

// Type Assertion
let cid: any = 1;
let customerId = <number>cid;
let customerId1 = cid as number;

// functions
const addNumber = (x: number, y: number): number => {
  return x + y;
};

// void
function log(message: string | number): void {
  console.log(message);
}

// interface
interface user {
  id: number;
  name: string;
  age?: number; // question mark makes it optional else it will always be need
} // similar to type

const User: user = {
  id: 1,
  name: "john",
};

/* difference between and type
type can accept unions
interface can't accept unions 
👇👇
*/

type difference = string | number;
let checkDiff1: difference = "sanni";
let checkDiff2: difference = 233;

// interface cantDo  = number | string  ❌❌❌ Error❕

//  setting interface for functions
interface mathFunc {
  (x: number, y: number): number;
}

const add: mathFunc = (x: number, y: number): number => x + y;
const addSub: mathFunc = (x: number, y: number): number => x - y;

// class
class personClass {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  } //  method within the class

  register() {
    return `${this.name} is now register`;
  }
}

const createPerson1 = new personClass(2, "sanni");
const createPerson2 = new personClass(4, "bola");


// Generics