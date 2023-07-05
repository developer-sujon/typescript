/**
 Optional chaining (?.) is an operator used to access a property of an object or call a function. If the object accessed using this operator is undefined or null then the expression returns undefined without throwing an error.
 
 The syntax of the optional chaining (?.) operator is:

 Obj.val?.prop; //অবজেক্টের প্রপার্টি এক্সেস
 array?.[1]; //অ্যারের আইটেম এক্সেস
 obj.func?.(args);//ফাংশন কল

 The optional chaining (?.) operator is similar to the (.) chaining operator, but the (?.) operator returns undefined instead of throwing an error for null or undefined references. During function calling it returns undefined if the given function does not exist.

 As a result, nested properties can be accessed through very simple and concise expressions even if there is no possibility of an object reference.

 Now let's look at the pros and cons of (.) and (?.) chaining operators with a simple example:

 const person = {
  name: 'Kalam',
  age: 40,
  hair: {
    color: 'black',
    style: 'straight',
  },
 };


 const hairColor = person.hair && person.hair.color;

 The value of person.hair is ensured to be non-null (and non-undefined) before accessing the value of person.hair.color. This prevents the error that occurs when directly accessing person.hair.color without checking person.hair.

 The value of person.hair does not need to be checked separately before attempting to access person.hair.color with the optional chaining operator (?.):

 const hairColor = person.hair?.color;

 By simply using the (?.) operator instead of the (.) operator, JavaScript implicitly checks to make sure that person.hair is not null or undefined before attempting to access person.hair.color. If the value of person.hair is null or undefined, the expression automatically returns undefined.

 Function calls with optional chaining

 Optional chaining can be used when attempting to call a function, where the function may not exist. Using optional chaining with function calls causes the expression to automatically return undefined instead of throwing an error if the function is not found.

 const result = customMethod?.();

 Use of optional chaining to write expressions

 The optional chaining (?.) operator can be used with bracket notation. For example:

 const nestedProp = obj?.['prop' + 'Name'];

 This is also particularly useful for arrays, since array indices are accessed with brackets.

 function printContent(arr) {
  console.log(arr?.[42]);
 }


 printContent([0, 1, 2, 3, 4, 5]); // Output: undefined
 printContent(); // Output: Error

 */
