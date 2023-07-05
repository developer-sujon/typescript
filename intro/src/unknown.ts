/**
 "unknown" and "never" are two concepts in TypeScript that help maintain code safety and type safety so that we can avoid any possible errors at runtime.

 The “unknown” type is the counterpart of the “any” type. Both are the “universal supertype” of TypeScript. That is, all types of TypeScript can be assigned to "any" or "unknown" type. But the difference is that type “any” can be assigned to any type without type assertion, but type “unknown” cannot be assigned to any type other than “any” or “unknown”.

 Type assertion is what tells the compiler to specify a type. That is, we have to be explicit in using the "unknown" type. For example:

 let exampleUnknown:unknown = "Hello World!";
 let exampleString:string = exampleUnknown;
 // Type 'unknown' is not assignable to type 'string'.

 exampleUnknown.toLowerCase()
 //  'exampleUnknown' is of type 'unknown'.

 Note here that although string value is assigned to a variable of type unknown, variable of unknown type cannot be assigned to another variable of string type. On the other hand, no string method of TypeScript can be used. In that case the compiler is giving us an error. Now if the type is specified using as then this error will no longer occur. For example:

 let exampleUnknown:unknown = "Hello World!";
 let exampleString:string = exampleUnknown as string;
 exampleString.toLowerCase() // "hello world!"

 This is an example of a type assertion. On the other hand type checking can also be used like this,

 let exampleUnknown:unknown = "Hello World!";

 if(typeof exampleUnknown === "string"){
   exampleUnknown.toLowerCase()
 }

 But in any usecase of type checking we need to keep block scope in mind.

 These restrictions on the use of the unknown type make it type safe. If there is a method in the codebase that only works with the functionality of one datatype, but mistakenly passed another datatype as an argument, the code will not work at runtime even if the compiler doesn't throw an error first. This is a huge problem in code debugging. By using the unknown type, these assumption problems can be avoided in advance.
 */
