/**
 A generic interface is similar to a generic function – a value can be assigned by specifying the data type using the type parameter. For example:

 interface KeyPair<T, U> {
    key: T;
    value: U;
 }

 let keyValue: KeyPair<number, string> = { key:1, value:"Hello" };

 This is a simple example, generic interfaces have more usability. Let's go back to our old friend the identity function.

 function identity<Type>(arg: Type): Type {
   return arg;
 }

 let myIdentity: { <Type>(arg: Type): Type } = identity;

 The myIdentity variable in the function has a call signature, that is, when the myIdentity variable is called, it will act like the identity function. It will return the data argument of the predefined type.

 Now we can move this type signature to a generic interface and use the interface instead of the signature.

 interface GenericIdentityFn {
   <Type>(arg: Type): Type;
 }

 function identity<Type>(arg: Type): Type {
   return arg;
 }

 let myIdentity: GenericIdentityFn = identity;

 The generic parameter (<Type>) can be written as GenericIdentityFn<Type> by removing it, making the parameter available to all elements within the interface.

 interface GenericIdentityFn<Type> {
   (arg: Type): Type;
 }

 function identity<Type>(arg: Type): Type {
   return arg;
 }

 let myIdentity: GenericIdentityFn<number> = identity;

 Maintainability is one of the key themes of the Generic Concept. Generic interfaces are very important for complex functions and data types.

 */
