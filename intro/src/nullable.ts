/**
 function fun(data: string){
  data.toLowerCase();
 }
 fun(null)

 Does running this code in javascript show any kind of error? Can anyone tell? No, no error will be displayed. But will crash during execution. Because functions cannot be called on null objects.

 But TypeScript is smart. Just seeing that line will show an error.
 //Argument of type 'null' is not assignable to parameter of type 'string'.

 Now where or why is this error coming from and do we need it? Let's answer your questions one by one.

 Why are you coming?

 fun function expects string type as parameter. But we are sending null , causing type mismatch.

 Where is it coming from?

 This error is caught due to the compiler option `“strictNullChecks”: true’ in tsconfig.json. False will not show the error.

 Why is it necessary? Would someone stupidly write null and send it to a function?

 It is true that it will not send. But when we send the data to the api, if for some reason the data is null? Or if the data is null due to a problem in the request at the time of fetching any data from the database?

 Therefore, nullable type is used to avoid such undesirable situations. Seems more difficult? So let's look at an example.

 The solution to the first example is not given earlier.

 The solution is if you use nullable type in function parameter. Even if null is sent, we are accepting it in the parameter and we can handle the case if we want.

 function fun(data: string | null){
  //...
 }

 interface User {
  id: number;
  name: string;
  email: string;
}

 Now for the second example:
 function fetchingUser(userID: number): Promise<User | null> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let user: User = {
        id: userID,
        name: "Mohammad Sujon",
        email: "devoloper.sujon@gmail.com",
      };

      return resolve(user);
    }, 2000);
  });
 }

 const displayUser = async (userID: number): Promise<User | null> => {
  const user = await fetchingUser(userID);
  if (user !== null) {
    return user;
  } else {
    return null;
  }
 };

 console.log(displayUser(1));

 The fetchUser function fetches data from the database to the frontend by the specified user id. The function returns a promise that is either User or null. If the correct user information can be retrieved from the database then User will return otherwise null. Based on that we handled the case inside the displayUser function.

 */
