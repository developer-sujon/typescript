/**
Tuple is a new data type in TypeScript, which can actually hold the values of different data types, but we have to tell us what type of data to keep, its syntax looks like an array.

// other variable types
const empId: number = 1;
const empName: string = "Mohammad Sujon";

// Tuple type variable
const employee: [number, string] = [1, "Mohammad Sujon"];

Again like arrays and objects, we can destruct tuples into new variables, let's see an example.

const profile : [string, number, string, boolean] = [
 'Mohammad Sujon',
 28,
 `Meherpur, Sadar`,
 true,
];
const [name, age, address, married] = profile;
console.log(`${name} is ${age} years old.`);

//output
Mohammad Sujon is 28 years old

Again we can use tuple as the return type of any function.

function ageDistance(age1: number, age2: number): [number, boolean] {
  return age1 > age2 ? [age1 - age2, true] : [age2 - age1, false];
}

const [difference, isOlder] = ageDistance(30, 69);
console.log(difference); // Output: 39
console.log(isOlder);    // Output: false
 */
