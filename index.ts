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
  name: string;
} = {
  id: 1,
  name: "sanni",
};
