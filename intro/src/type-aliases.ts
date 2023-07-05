/**
 Type Alias is a feature in TypeScript that provides a naming convention for types. Using type aliases we can create a custom type that can be used in different places in the code. These types help to understand the code.

 It is usually used for complex types, such as object types, array types, etc. Type aliases provide a convenient way to define a specific type, if the same type needs to be used in many places in the code, we can easily do it with type aliases instead of rewriting the same code.

 The type keyword is used to define type aliases in TypeScript. It provides a name and with that name we can reuse our custom type. Through it we can define types of types, object properties, function signatures etc.

 Let's give an example. We will want to define an object type. In the code below, the Person type is defined with a type alias:

 type Person = {
    name: string;
    age: number;
    profession: string;
 };

 Here Person is the name of the type alias and within it we have defined an object type that holds the name, age, and profession properties.

 Let's see an example of how we can create an object using this alias:

 const person1: Person = {
    name: "Mohammad Sujon",
    age: 22,
    profession: "Web Developer"
 };


 const person2: Person = {
    name: "Akbor",
    age: 25,
    profession: "Designer"
 };


 function printPersonDetails(person: Person) {
    console.log(`name: ${person.name}`);
    console.log(`age: ${person.age}`);
    console.log(`profession: ${person.profession}`);
 }


printPersonDetails(person1);


 // output:
 name: Mohammad Sujon
 age: 22
 profession: Web Developer


 printPersonDetails(person2);
 // output:
 name: Akbor
 age: 25
 profession: Designer
 
 Above, we created two objects person1 and person2 using Person alias. Next, the printPersonDetails function accepts an object of type Person as a parameter and checks and displays the properties of an object of that type.

 Thus by using type aliases we can increase code readability without needing to rewrite a lot of code.

 */
