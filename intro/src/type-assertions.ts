/**
 Type assertions are a mechanism in TypeScript that informs the compiler about a variable's type. A variable's type is usually overridden using type assertions.

 When assigning values to variables using type assertions always ensure that the correct type assertion is made, or the program may not function correctly.

 Using this, we can also treat any number as a string. When moving code from JavaScript to TypeScript, type assertion is often used.

 The type assertion function is similar to typecasting but has some differences, such as unlike typecasting in C# and Java, it does not perform type checking or data reordering. Although runtime support is provided for typecasting, type assertion does not affect runtime. Type assertions only indicate at compile time how the compiler should read the code.

 Type assertion in TypeScript can be done in two ways and they are:

 using the <> operator.
 Using the “as” keyword.
 Using the “as” keyword for type assertion
 The “as” keyword is used as a method of type assertion in TypeScript.

 Its syntax is
 let age_any: any = 123;
 let age_nmber: number = age_any as number;

 Type assertion is done on a variable of type any using the “as” keyword in the above syntax.

 Example:

 The example below uses the “as” operator for type assertion. First an unknown type variable is taken, whose value is “Mohammad Sujon”. Type assertion is then performed using the “as” keyword and the length property of the string is used to make the compiler treat the variable as a string.

 let name_unknown: unknown =’Mohammad Sujon’;
 console.log('name_unknown: ', name_unknown);
 let name_length: number = (name_unknown as string).length;
 console.log('name_unknown length is: ', name_length);

 Compiling this code will generate the following JavaScript code

 var name_unknown = ‘Mohammad Sujon';
 console.log('name_unknown: ', name_unknown);
 var name_length = name_unknown.length;
 console.log('name_unknown length is: ', name_length);


 // output:
 // name_unknown: Mohammad Sujon
 // name_unknown length is: 11
 */
