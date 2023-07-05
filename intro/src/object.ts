/**
 Object is a dynamic non-primitive data type in JavaScript. The reason for saying dynamic is that we can add any data to the object whenever we want.

 example:
 let person = {
   id: 1
 }

 person.name = 'Mohammad Sujon'

 console.log(person)
 //output
 person: {
 id: 1, // number type
 name: 'Mohammad Sujon' // string type
 }

 This is valid JavaScript code, because we added a new name property to the person object and assigned its value.

 But if I try to do the same thing in TypeScript, it will show a compile time error,

 let person = {
  id: 1,
  };

 person.name = "Momad";
 //error
 Property 'name' does not exist on type '{ id: number; }'

 The reason for this is that when we define an object in typescript and if we initially add something as its property, then that object is defined as its type, as above, so person cannot find name as its property.

 let person : { id: number, age: number, name: string }= {
    id: 1,
    age: 28,
    name: ''
 }
 person.name = 'Mohammad Sujon'

 Now we can modify the properties of the person object if we want. We have defined the type of person object and said that there are certain properties and other properties cannot be added and no value of any type other than the specified type can be given.

 */
