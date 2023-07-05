/**
 Functions are very important in the world of programming. The basic concept of functions is the same in almost all programming languages. We have learned in JavaScript that functions operate on an instruction and from there we can return something.

 Now we will discuss how to use functions in Typescript or what rules to follow for using functions.

 We already know how to write functions. Let's start with an example. Suppose we write a function that actually performs different operations on two numbers,

 const calculateNumber = (num1: number, num2: number): number => {
    let sum: number = num1 + num2;
    return sum;
 }

 const result = calculateNumber(10,20); // call function
 console.log(result);
 //output 30

 Here we write an arrow function and accept two numbers as parameters of the function and return by adding the two numbers, now notice some things here we have written the two parameters num1: number and num2: number so that the two values that will be given are as The number type is look again we have also told the return type of the function that after performing two operations on the number it will return me a number.

 Now while calling the function if we send any string value without number as the first parameter then typescript will show error at compile time.

 const calculateNumber = (num1: number, num2: number): number=>{
    let sum: number = num1 + num2;
    return sum;
 }

 calculateNumber("10",20); // error: Argument of type 'string' is not assignable to parameter of type 'number'.

 Again if we want the function not to return anything then we have to specify the return type of the function as void.

 const printName = (name: string): void=>{
    console.log('My Name is: ', name)
}

 printName('Mohammad Sujon');

 //output
 My Name is Mohammad Sujon

 So what we understood, if we tell the return type of the function or define the parameter type of the function while writing, then there will be very few mistakes in our code or confusion will not be created while writing the code, so the best practice is to define the type.

 */
