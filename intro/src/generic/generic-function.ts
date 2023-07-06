/**
 Simply put, generics are a feature of TypeScript that allows you to create small code components with reusable functions, classes, interfaces, that can work for different data types. This concept is not only used by TypeScript, but other strongly-typed languages including C#, Java, Rust, Go support this feature.
 
 A generic function can be used repeatedly by different data types through type variable declaration. Before discussing the other properties and usability of generics in detail, some things should be clear. Eg: How re-usability concept works in generics, what are type variables, why a generic function works differently from a normal function.

 Let us discuss the issues through a simple example.

 function identity(arg: number): number {
   return arg;
 }

 This is a simple identity function that returns the function's arguments. This function can be called repeatedly in code. But it is only valid for number type. It is not valid for any other type.

 The specialty of a generic function is that the generic function is useful and reusable for other types. Type parameters can be defined using two angle brackets < > after the function or class name. It is also called type variable. For example:

 function identity<T>(arg: Type): T {
   return arg;
 }

 Here T in brackets is type parameter or type variable. That is, type can be specified as the data type in this parameter. For example:

 let result1 = identity<number>(2); ।* T is number *।
 let result2 = identity<string>("Hello"); ।* T is string *।

 Here it is seen that the identity function is used for both number and string types by declaring the type variable. Well, but one question remains that if any type is used in the parameter of a general function, then it will be a generic function or not? Since the function will work for any type. This is a very good question.

 The any type function supports different data types as arguments, but we do not know or control what type the function will return. This violates the rules of the generic concept. Because of this, using any in a generic function can be reusable for different types, but it will not be a generic function. This is very important for codebase maintainability. So in generic functions we use type variables ( <T> ) which operate on the type rather than the value of the variable.

 But in case of Array type [ ] (third bracket) has to be mentioned separately. For example,

 function identity<Type>(array: Type[]): Type[] {
   console.log(array.length);
   return array;
}

 // An array of numbers
 let numbers = [1, 2, 3];

 // Call the generic function with number as the type parameter
 let identityNumber = identity<number>(numbers);

 // An array of strings
 let strings = ["a", "b", "c"];

 // Call the generic function with string as the type parameter
 let identityStrings = identity<string>(strings);

 Because arrays in Typescript are a special data type that can hold more than one value and it uses numerical indexing. Again the function can be written as:

 function identity<Type>(arg: Array<Type>): Array<Type> {
   console.log(arg.length);
   return arg;
 }
 Through Array<Type>, the type of elements in it can be specified.
 */
