/**
 We can work with array values in the same way in TypeScript as in JavaScript, but in TypeScript we need to define the type of the array to use the array. In TypeScript we can define an array type in two ways, ie:

let list: number[] = [];

list.push(1);
list.push(2);
list.push(3);

console.log(list); //output [1, 2, 3]

We have defined a list array which is actually number type, that means we can keep only number type data in this array list, now if we want to push any string value then compiler will show us error.

let list2: number[] = [];

list2.push('apple');

//Error Argument of type 'string' is not assignable to parameter of type 'number'.

Again we can also define arrays as generic types like:

The second way uses a generic array type, Array<Type>:
let list: Array<string> = ["apple", "banana", "orange"];

Now we can also define arrays as arrays of objects if we want, eg:

type PersonType{
    id: number;
    name: string;
    age: number;
}
let persons: PersonType[] = [];

persons.push({id: 1, name: 'Mohammad Sujon', age: 22});

persons.push({id: 2, name: 'Somrat Akbor', age: 25, height: 5.3})

// Error Argument of type '{ id: number; name: string; age: number; height: number; }' is not assignable to parameter of type 'PersonType'.

That means we see that we can only put PersonType objects in the persons array, otherwise TypeScript will show us a compile-time error. Again, as properties of our PersonType object, we can define any type of data, such as:

interface PersonType2{
    id: number;
    name: string;
    age: number;
    books: string[]
}

let persons: PersonType2[] = [];

persons.push({id: 1, name: 'Mohammad Sujon', age: 28, books: ["Physics", "Math"] });

Here we add a new property called books, which is again an array of strings, and we can also define an array of arrays:

interface PersonType3{
    id: number;
    name: string;
    age: number;
    books: string[]
}
let persons: PersonType3[][] = []; // array of array

persons.push([{id: 1, name: 'Mahmudul Hasan', age: 28, books: ["Physics", "Math"] }]);

*/
