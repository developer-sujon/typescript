/** 
Date Types for TypeScript
Javascript built-in datatypes [number, string, null, undefined, boolean, symbol, bigint, and object]
TypeScript provides extra datatypes [any, never, unknown, enum, and triple]

Example:

let age: number = 22;
let personName: string = "Mohammad Sujon";
let isMarried: boolean = true;

age = "3000"; //error Type 'string' is not assignable to type 'number'
isMarried = 3000; //error Type 'number' is not assignable to type 'boolean'.
personName = true; // error Type 'boolean' is not assignable to type 'string'.

So we saw that if we assign data of a different type inside a string type variable, the compiler will show us an error.

Again all these data types can be divided into two parts such as:
1. primitive types
2. not-primitive/ referance types

What is primitive datatype?

Primitive data type is a very basic data type which is actually immutable, meaning its value never changes, in fact its current value remains the same.

Example:

let age: number = 22;
let designation: string = 'Junior Backend Engineer';
let is_published: boolean = true;

age = "22"; //error Type 'string' is not assignable to type 'number'
is_published = 22; //error Type 'number' is not assignable to type 'boolean'.
designation = true // error Type 'boolean' is not assignable to type 'string'.

The reason why the final output is mutable is because we directly assigned the new value without modifying the current value.

By looking at the example, we must have understood what immutable is actually. Let us now see how many primitive data types there are:

Number
String
Boolean
Undefined
Null
Symbol

Non-primitive data type

We have seen that primitive data type is immutable whose data we cannot actually modify but non-primitive data type is mutable, such as object, we can modify the value of object. Let's see an example

type Person{
name: string;
age: number;
city: string
}
let person: Person= {
  name: "John",
  age: 30,
  city: "New York"
};
person.name = "Mohammad Sujon" //modify name here
person.city = "Meherpur" // modify city here
console.log(person.name); // Output: Mohammad Sujon
console.log(person.age);  // Output: 30
console.log(person.city); // Output: Meherpur

let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits[0]); // Output: apple
fruits[0] = "mango"; // replace apple to mango in index 0
console.log(fruits[0]); // Output: mango

Then we see Array is a non-primitive data type. Other non-primitive data types are given below:

Object
Array
Function
Class
Tuple
Interface
Enum
Generic
Decorators

*/
