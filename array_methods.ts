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

let copywithin = fruits.copyWithin(4, 0);
// console.log("copywithin", copywithin); ✔

const entries = fruits.entries();
for (const [index, element] of entries) {
  // console.log(index, element);
}
console.log(entries.next().value); // Returns an iterable of key, value pairs for every entry in the array ✔

const every = fruits.every();
