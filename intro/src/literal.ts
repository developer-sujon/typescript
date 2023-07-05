/**
 Already learned about many types in TypeScript. Now again what is the literal type? No reason to worry. It's not that difficult.

 In book terms, literals are used to directly establish values in code. It is a method of expressing own value or specific value. Now let's break it down with some examples in our language.

 let name: 'Mohammad Sujon';
 name = 'Akbor'; // Error: "Akbor" is not assignable to type "Mohammad Sujon"

 What do you understand from here?

 A variable 'name' is assigned the direct value 'Rakib' as its type. Now we cannot assign anything other than 'Rakib' in this variable.

 The point is, what was the need for such madness? Shouldn't the string type be used? Would it have been possible to put another check there and assign only the name that is needed?

 Let's take a look now.

 When we code it is thousands of lines. Assume there are some lines at the beginning of the code.

 type DrivingDirection = "North" | "East" | "South" | "West";
 function drive(direction: DrivingDirection) {
   // ...
 }
 drive("North"); // Okay
 drive("Nurth"); // Error!

 If someone calls the 'drive' function a few hundred lines later and for some reason passes in a misspelled parameter, the TypeScript compiler will immediately throw an error.

 Now let's look at another example:

 function buyCar(car: 'toyota') {
 // ...
 }

 const newCar = {
   carModel: 'toyota'
 };

 buyCar(newCar.carModel); // Error: Argument of type string is not assignable to parameter of type 'toyota'

 But can anyone tell me the reason for showing such an error?

 Here is an object 'newCar' which has a property 'carModel' assigned a value of type string (not of type 'toyota') so when newCar.carModel is passed as an argument to the buyCar function, the problem is that it expects a parameter of type 'toyota' appear

 Now what is the way out of here? Let's try to figure it out.

 function buyCar(car: 'toyota') {
  // ...
 }
 
 const newCar = {
  carModel: 'toyota' as 'toyota'
 };

 buyCar(newCar.carModel); // Okay!

 */
