/**
 A generic class name, like a generic function or interface, is defined in angle brackets (<>) followed by one or more type parameters. Let's look at an example of a generic class:

 class GenericExample<NumType, StringType> {
  numberValue: NumType;
  stringValue: StringType;

   constructor(numberValue: NumType, stringValue: StringType) {
      this.numberValue = numberValue;
      this.stringValue = stringValue;
   }
}

 Note that the GenericExample class uses two generic type parameters, NumType and StringType. This type parameter can be used by both other properties of the class and the constructor. The class can be used like this:

 let myGenericExample = new GenericExample<number, string>(0, 'Hello');

 console.log(myGenericExample.numberValue); // prints 0
 console.log(myGenericExample.stringValue); // prints 'Hello'

 Here number and string types are specified through type parameter. and passed as two value arguments to the class constructor. We know that in the argument we cannot use any other type of value except the value of that specific type.

 Extending generic classes:
 We can add some features to the class by extending the generic class. A generic class can be extended using the extend operator. First let's create a generic class:

 interface Product {
  name: string;
  price: number;
 }

 class Store<T> {
  protected _object: T[] = [];

  add(obj: T): void {
    this._object.push(obj)
  }
 }

 Here an object and a method are declared inside the class which will push a value of type T to the object. The object uses the protected keyword so that its properties can be accessed from subclasses.

 class StoreSubclass<T> extends Store<T>{
    // StoreSubclass method here
 }

 Now suppose we want to access an element of baseclass _object from a subclass. Let's define a method to do this.

 class StoreSubclass1<T> extends Store<T> {
 findMethod(name: string): T | undefined {
    return this._object.find(obj => obj.name === name)
  }
  // Property 'name' does not exist on type 'T[]'.
 }

 We cannot access the value of the object using dot notation like this from within the method. In that case it will show compilation error. For example: here the subclass parameter <T> does not know that the object has a name property. In that case, we have to specify the parameters of the subclass like this.

 class StoreSubclass1<T extends { name: string }> extends Store<T>{
 findMethod(name: string): T | undefined {
    return this._object.find(obj => obj.name === name)
  }
}

 On the other hand if we don't want to make the subclass generic then we can fix the generic type parameter. For example:

 class fixedStore extends Store<Product> {
  identity(category: string): Product[] {
    return [];
  }
 }

 Here the type parameter of the baseclass is fixed by the interface type. We can explore such features by extending a generic class.
 */
