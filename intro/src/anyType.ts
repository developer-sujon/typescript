/**
Any type is not actually a data type, it is a special data type in TypeScript, which can actually accept all types of data types, that means when we assign different types of data inside an any type data variable, TypeScript compiler does not do type checking anymore. So while writing our code we may come across a situation when actually the type of data is unknown to us or it may be data from a third party library or an API, in that case we can use any type.

let anyData: any;
or
let anyData; // typescript automatic defined as any type
anyData  = 12;
anyData  = "12";
anyData  = [12];
anyData  = {
   id: 12
};

const res: any = api.getDataSomeWhere(); //api call

Here we don't know the data we will get in res, or we have assigned many data types inside anyData above. In this case, a lot of confusion may be created while writing our code or we may have many mistakes in the code.

For example: if we want to see any data with res.name or anyData.name then it will show us an error, because the compiler does not know the type of the data we are accessing or printing or whether it exists at all.

Again suppose we write a function that actually returns the sum of our two numbers.

function calculateNumber(number1: any, number2: any){
    let sum: any = number1 + number2;
    return sum;
}

const result = calculateNumber(2,"10");

console.log(result) //output "210"

We got “210” as output but we were supposed to get 12, so is the code giving wrong output? No the code gave the correct output, we made a mistake, see when we called the function the second parameter we gave string value instead of number so adding 10 as string to function 2 returned our string value 210. So if we give number type instead of any type in the function parameter, but when calling the function we get error at compile time and we get correct output and there is no error in our code.

Now the purpose of using typescript is for type safety, so that there is no mistake in our code or any confusion while writing the code, so the best practice is to define the type and avoid any type.

*/
