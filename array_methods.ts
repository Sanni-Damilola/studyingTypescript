// repraticing array methods

/* 
copywithin
entries 
every 
fill
filter
find 
findindex 
flat 
flatMap 
forEach 
includes 
indexOf 
join 
keys 
lastindexOf
map 
pop
push
reduce
reduceRight
reverse
shift
slice
some
sort
splice
toLocalString
toString
unshift
values
*/

const data = [
  {
    name: "sanni",
    id: 1,
    status: true,
  },
  {
    name: "bola",
    id: 2,
    status: false,
  },
  {
    name: "lola",
    id: 3,
    status: false,
  },
  {
    name: "anu",
    id: 4,
    status: true,
  },
];

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let copywithin = fruits.copyWithin(1, 3);
// console.log("copywithin", copywithin);

/*
✔  target the index postion of the second
 argument and replace it with the index 
 position of the first argument
*/

const entries = fruits.entries();
for (const [index, element] of entries) {
  // console.log(index, element);
}
// console.log(fruits.entries().next().done); // Returns an iterable of key, value pairs for every entry in the array ✔


const every = data.every((person) => typeof person.id === "number"); 
// console.log(every);
/*
✔ {use to check the data type of a patcular
   element in an arr if yes it return true
    else it will return false } Determines
 whether all the members of an array satisfy
  the specified test if yes it 
  return true else it will return false .
*/

let emptyArr: any = [];
const fill = emptyArr.push("sanni");
// console.log(fill); // Changes all array elements from start to end index to a static value and returns the modified array ✔

for (let index = 1; index <= 10; index++) {
  emptyArr.push(index);
}
// console.log(emptyArr.fill("sanni", 4));

const find = data.find((item, index, arr) => {
  return item.name === "bola";
});
// console.log("find", find);
// console.log(data); // Returns the value of the first element in the array where predicate is true, and undefined otherwise

const findIndex = data.findIndex((el) => {
  return el.id === 3;
});
// console.log(findIndex); // Returns the index of the first element in the array where predicate is true, and -1 otherwise.

const checkFlat = [1, [2, [3, [4]]]];
const flat = checkFlat.flat(Infinity);
console.log(flat);
/* 
Returns a new array with all 
sub-array elements {it use to break a nexted 
  array into sub-array and return all element 
  in one array, the parameter is 
  called {depth} it must be a number: it is use to define the number 
  of break you want..the defalut depth 
  is 1 i.e if you don't put any paramiter
   it gonna break the array only ones...
  else if you want an infinite break use the
   keyword: {Infinity}} otherwise
    define the number of breaks: (depth) }
*/


