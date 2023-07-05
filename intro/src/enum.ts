/**
 Enums Enums are one of the few features in TypeScript that are not type-level extensions of JavaScript.  Suppose we want to define some constant values and those values can be used for different purposes later, we  can do that very easily by using enum, in typescript we can use two types of enum.
 
 1.numeric enums
 2.string-based enums
 To declare inam we need to use the inam keyword, let's look at the usage of two types of inam:
 
 //Numeric enums
 
 enum Direction {
 Up = 1,
 Down,
 Left,
 Right,
 }
 console.log(Direction.Right);
 
 // output 4
 
 Here we have initialized Up with 1 and since it is a numeric name, the rest of the members will be  auto-incremented, Down => 2, Left => 3, and Right => 4, and if we had not initialized Up, it would have  started with 0. would have been
 
 // error case
 enum E {
 A = getSomeValue(),
 B,
 //error Enum member must have initializer.
 }
 
 //string enum
 enum Direction {
 Up = "UP",
 Down = "DOWN",
 Left = "LEFT",
 Right = "RIGHT",
 }
 
 console.log(Direction.Right);
 
 //output RIGHT
 
 But in case of string inum we must initialize each member with string value.
*/
