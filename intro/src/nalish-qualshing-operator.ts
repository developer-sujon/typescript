/**
 The null coalescing (??) operator is a logical operator that returns its right-hand operand when its left-hand operand is undefined or null, and returns its left-hand operand otherwise.

 The syntax of the noun coalescing (??) operator is
 leftExpr ?? rightExpr;
 Let us see the usage of this operator through a small example

 const name = null ?? 'Sarkar';
 console.log(name);
 // output "Sarkar"


 const age = 0 ?? 42;
 console.log(age);
 // output 0

 The null coalescing operator can be viewed as a special case of the logical OR (||) operator. The (||) operator returns the right operand if the left operand is a falsy value, not just undefined or null. In other words, if the logical OR (||) operator is used to assign some default value to the variable name , and if some falsy value is considered usable, some unexpected behavior will be encountered (eg, ” or 0).

 The null coalescing operator has the fifth-lowest operator precedence, directly lower than the (||) operator and directly higher than the conditional (ternary) operator.

 With both AND (&&) and OR operators (||) ?? Cannot be used together. In this case a syntax error will be thrown.

 null || undefined ?? "foo"; // Syntax Error
 true && undefined ?? "foo"; // Syntax Error

 Instead, we have to use the first bracket:

 (null || undefined) ?? "foo"; // "foo"

 Some examples of declarative coiling operators

 (1) Here the default value is provided which will contain all other values except undefined or null.

 const nullValue = null;
 const emptyText = ""; // falsy
 const someNumber = 42;


 const value1 = nullValue ?? "default for 1";
 const value2 = emptyText ?? 'default for 2';
 const value3 = someNumber ?? 0;
 
 
 console.log(value1); // "default for 1"
 console.log(value2); // ""
 console.log(value3); // 42

 (2) Previously OR(||) operator was used to assign default value to variable, but since OR(||) operator returns the right operand for any falsy value, in some cases if the falsy value (“” or 0) Could have been provided as a default value, which could have been used using the nested coiling operator.

 const deafultText = "";


 const textWithOR = deafultText || "Hello world";
 console.log(textWithOR); // output: Hello world


 const textWithNullishCoalescing = deafultText ?? 'Hi neighborhood';
 console.log(textWithNullishCoalescing); // output: ''

 (3) As with logical operators, the right-hand expression is not evaluated unless the left operand is undefined or null.

 function first() {
  console.log("First Function");
  return undefined;
 }
 function second() {
  console.log('Second Function');
  return false;
 }
 function third() {
  console.log('Third Function');
  return "foo";
 }


 console.log(first() ?? third());

 Notice in the above example, here the “First function is called.” Then the “Third” function is called and finally “foo” is printed. Since first() returns undefined, both functions will be evaluated.

 console.log(second() ?? third());
 And in this case first the “Second” function is called which will print “false”. Since the second() function returns false (which is not null or undefined), the expression on the right is no longer evaluated.
 */
