import "./generic/genetic-class";

interface Product {
  name: string;
  price: number;
}

type ReadonlyProduct = {
  readonly [Key in keyof Product]: Product[Key];
};

console.log(ReadonlyProduct);
