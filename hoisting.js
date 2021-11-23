// printName();
// printNum();
// console.log(arr);
console.log(typeof bar);

// function keyword is fully hoisted.
// i.e., placed into global space prior to execution of the program
function printName() {
  console.log('print name');
}

//printName cannot be accessed before initilization
var printNum = () => {
  console.log('print num');
};

//ReferenceError: Cannot access 'foo' before initialization
const name = 'print const';
//ReferenceError: Cannot access 'foo' before initialization
let foo = 'print let';
// does not throw error -- returns undefined
var bar = 'print var';

const arr = null;
