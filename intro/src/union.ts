/**
 Union types in TypeScript are used to accept multiple types in a variable or function.

 This allows a variable to be assigned a specific type or multiple types. This gives us flexibility and helps us detect errors in the code.

 Let's make this clear with an example:

 let address: string | number;
 address = "Meherpur";
 console.log(address); // Output: Meherpur


 address = 100;
 console.log(address); // Output: 100

 In the example, the address variable is assigned a string or a number. If a variable needs to hold more than one type of value then union type provides that facility.

 Union types can also be used as function parameters and return types.

 Let's look at the example below:

 function processAddress (address: string | number): void {
 if (typeof address === "string") {
 console.log("string value:", address);
 } else {
 console.log("number value:", address);
 }
 }


 processAddress("Meherpur"); // output: string value: Meherpur
 processAddress(42); // output: number value: 42

 Here the processAddress function takes a string or a number as parameter and prints the output according to the type of the input. The function parameter address is a union type that can be a string or a number. We are using the typeof operator to check whether the parameter is a string or a number, so that we can verify at runtime that you have passed the correct type.

 Union types are a powerful feature of programming in TypeScript. It helps you control complex types easily. With union types you can change the type of a variable, function or object.

 Using this you can use multiple types as a single type. This is very important when your function has multiple arguments and each argument can be a specific type.

 Let's clarify the point with an example:

 function printData(data: string | number): void {
    console.log(data);
 }


 printData("Welcome"); // Output: Welcome
 printData(42); // Output: 42

 In the example, the printData function accepts a string or a number type parameter and prints the value passed to it.

 Union types can be used with optional parameters. See the example below:

 function fetchData(url: string, options?: FetchOptions): void {
    // code logic
 }


 interface FetchOptions {
    method?: string;
    headers?: { [key: string]: string };
    body?: string;
 }


 const requestOptions: FetchOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "John Doe" }),
 };


 fetchData("https://example.com/api", requestOptions);

 In the example, the fetchData function accepts a URL and an options object. The FetchOptions interface is defined as an Optional object through which you can pass a specific type or value to each parameter. Here the options parameter is defined as a union type FetchOptions , which can contain multiple properties.

 Union types provide control between multiple types and create complex data structures.

 An example:

 interface Square {
    type: "square";
    size: number;
 }


 interface Circle {
    type: "circle";
    radius: number;
 }


 type Shape = Square | Circle;


 function getArea(shape: Shape): number {
 if (shape.type === "square") {
    return shape.size ** 2;
 } else if (shape.type === "circle") {
    return Math.PI * shape.radius ** 2;
 } else {
 // Unexpected type
    throw new Error("Unexpected type");
 }
 }


 const square: Square = { type: "square", size: 5 };
 const circle: Circle = { type: "circle", radius: 3 };


 console.log(getArea(square)); // output: 25
 console.log(getArea(circle)); // output: 28.274333882308138

 */
