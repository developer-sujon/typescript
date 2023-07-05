/**
 An intersection type in TypeScript is a combination of types that is a combination or combination of two or more types. That is, with typescript we can make a type in a combination of several types in addition to different types.

 The syntax of intersection type is Type1 & Type2 where Type1 and Type2 are the same or different type names. In this way a new type is created which is a combination of several types. Think you have one type which is number type and another one is object type, a new type can be made by combining these two types. By using intersection type you can take members of that type ie you can access members of both types through it. Let's look at the following example:

 type NumberObject = {
    numberValue: number;
 };


 type Person = {
    name: string;
    age: number;
 };


 type IntersectionType = NumberObject & Person;


 const intersectionObj: IntersectionType = {
    numberValue: 10,
    name: "John",
    age: 25,
 };

 In the example above, the IntersectionType type is composed of the NumberObject and Person types, so the IntersectionType object will take the numberValue, name, and age properties as members.

 Consider, a Book type where a type is defined to store the details of a book which will take the title of the book, the name of the author and the price. Another type Magazine is defined which specifies the description of the newspaper which will take the title of the newspaper, the name of the editor and the date. Using the intersection type you can create a new type by combining these two types. See example below:

 type Book = {
    title: string;
    author: string;
    price: number;
 };


type Magazine = {
    title: string;
    editor: string;
    date: string;
 };


 type Publication = Book & Magazine;


  const publication: Publication = {
    title: "Amar Bangla Boi",
    author: "Mehedi Hasan",
    price: 200,
    editor: "Viva Prokashoni",
    date: "01-01-2023",
 };
 
 In the example above, the Publication type is created by combining the Book and Magazine object types. As seen here, the Publication object takes title, author, price, editor, and date properties as members. It is an intersection type that connects two types to form a new type.
 */
