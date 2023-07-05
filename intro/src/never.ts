/**
 The “never” type indicates a type that cannot have any possible values. . For example, a function that will never go to the end or will always throw an error, then "never" is used as the return type. But why? Or what can happen if you don't use never type in such a function?

 We can actually use the Never type to indicate unreachable code. Let's say there is a function that will always throw an error. As per convention we should use never type here. If we use any instead of never it will still throw an error and halt the function execution. But any subsequent executable code will not show error. That is, we may not realize that there is some unreachable code in the codebase that will not execute. An important function may have been declared by mistake. For example:

 function throwError(error: string): any {
  throw new Error(error);
 }
 throwError('Error occurred!'); // function halts here


 // These lines are not executing but also not showing any error
 veryImportantFunction();
 console.log('Hello World!');
 Now if we use never type:

 function throwError(error: string): never  {
  throw new Error(error);
 }

 throwError('throw');

 // Unreachable code detected.

 veryImportantFunction();
 console.log('Hello World!')

 In this case the TypeScript compiler will throw us an error before execution. These never type rules help us write error free code, simplify debugging, and potentially avoid runtime errors.

 On the other hand, if there is an infinite loop in the code, we must use the Never type in the same way, otherwise the loop will remain in execution until the code is explicitly broken at runtime. And we won't see the proper error message as to why no further code is executing.

 function processEvent(): never {
   while(true){
      // Read an event from queue
   }
 }
 processEvent();
 // Unreachable code detected.

 veryImportantFunction();
 console.log('Hello World!')

 However, one thing to be aware of is that the tsconfig file cannot have “allowUnreachableCode”: true. Then the TypeScript compiler will skip the error message.
 */

function processEvent(): never {
  while (true) {
    // Read an event from queue
  }
}
processEvent();
// Unreachable code detected.

// veryImportantFunction();
console.log("Hello World!");
