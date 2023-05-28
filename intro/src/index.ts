
type funcType = (a: number, b: number, c: number) => number

const sayHello: funcType = (a, b, c) => {
    return a + b + c;
}

const result = sayHello(1, 2, 1);

console.log(result);



