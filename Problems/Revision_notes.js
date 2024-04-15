//--------------------------------------------------Objects--------------------------------
// Object literals

// let user={ }  //--------Simple Object, user=> object name.

//**create Object  */

//Ways to create object-->>
// 1st way - Singletone object
// let user={
//     name: "nitesh",
//     age:27,
//     mobile_no:8668069441,
//     is_he_working:true,
//     email:"nitesh@gmail.com",
//     "mobile no2": 9444544051
// }

// 2nd way,-- The key-values are inside the curly brackets which are again capsuled into normal brakets. Also called as non singletone objects.

// let user =new Object(
//     {
//         name: "nitesh",
//         age:27,
//         mobile_no:8668069441,
//         is_he_working:true,
//         email:"nitesh@gmail.com",
//         "mobile no2": 9444544051
//     }
// )
// the above object- user, we see key-values pairs. where keys are name, age, mobile_no....... and values are nitesh, 27,8668069441.....

//** print Object */
// Now we have created the object, lets begin to extract and print it.
// we can do it in 2 ways, one by dot(.) and another by square bracket([]).

//  console.log(user.name) // here we used the dot method and got he name from inside the object.
//console.log(user[name]) // this is the wrong method, there must be double quote for name of the object key.

//  console.log(user["name"]) // now it will work, as this way we used square method.

// lets say we havea key name which consists of 2 words and there is a gap like- mobile no, email id. here we see the key names has a space in between two words, to print such key-values we cant use dot way, the only way is square braket with double quotes.
//console.log(user["mobile no2"])

// now if we wish to freeze the obj to ensure there are no modification with key values then we use a "freeze" property of object.

// lets add modify the object and again it can be done in 2 ways.

// // 1st way dot method,
// user.location="chennai" // now we have added a new key-value pairs, key location and value- chennai.

// console.log(user) // here we ar eprinting the updated object with location as key and its value- chennai.

// // 2nd way is square braket method,
// user["location"]="pune" // now we have added a new key-value pairs, key location and value- chennai.

// console.log(user) // here we ar eprinting the updated object with location as key and its value- chennai.

// lets merge the objects,

// let obj1={
//     1:"A",
//     2:"B"
// }

// let obj2={ 3:"C", 4:"D",}
// let obj3={ 5:"E", 6:"F",}

// let allobj= Object.assign(obj1,obj2,obj3) // here we are assigning all the key-values details into the 1st object which is obj1.
// console.log(allobj)
// console.log(obj1)  // here we can see the obj1 data had been update with allobj.

// If I want to avoide it then we have another way,

// let allobj= Object.assign({},obj1,obj2,obj3) // here all the objects are assigned into new object"{}", which is empty when we create it.
// console.log(allobj)

// 3rd way,-->Spread way
// let allobj= {...obj1,...obj2,...obj3}// here all the objects are assigned by 3 dot's at the pretext within the curly bracket.
// console.log(allobj)

// If we just need the keys of the object, then we can use below method.

// console.log(Object.keys(user)) --> To get keys names
// console.log(Object.values(user))--> To get values names

//------------------functions----------------------

// function is like a empty capsule, inside which we keep a set of code.Now if we need to execute that piece of code, then we simply call the function and it can be called nth number of time.

// function add(a,b){     // here we have hava fn with name- add and where ever we call it , it will add two number which were provided to it at the time of call. And "a" & "b" are parameters.
//     console.log(a+b);
// }
//Function parameters are listed inside the parentheses () in the function definition. Function arguments are the values received by the function when it is invoked. Inside the function, the arguments (the parameters) behave as local variables.

//-------------Arrow Functions------------------------

//Method

// A method is a function which is a property of an object. There are two kinds of methods: instance methods which are built-in tasks performed by an object instance, or
//static methods which are tasks that are called directly on an object constructor.

// Note: In JavaScript functions themselves are objects, so, in that context, a method is actually an object reference to a function.

// When F is said to be a method of O, it often means that F uses O as its this binding. Function properties that do not have different behaviors based on their this value (or those that don't have a dynamic this binding at all — like bound functions and arrow functions) may not be universally recognized as methods.

// What is this?

// In JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:
// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.

// Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function.

// // Traditional anonymous function
// (function (a) {
//     return a + 100;
//   });

//   // 1. Remove the word "function" and place arrow between the argument and opening body brace
//   (a) => {
//     return a + 100;
//   };

//   // 2. Remove the body braces and word "return" — the return is implied.
//   (a) => a + 100;

//   // 3. Remove the parameter parentheses
//   a => a + 100;

// The braces can only be omitted if the function directly returns an expression. If the body has additional lines of processing, the braces are required — and so is the return keyword. Arrow functions cannot guess what or when you want to return.

// // Traditional anonymous function
// (function (a, b) {
//     const chuck = 42;
//     return a + b + chuck;
//   });

//   // Arrow function
//   (a, b) => {
//     const chuck = 42;
//     return a + b + chuck;
//   };

// Arrow functions are always unnamed. If the arrow function needs to call itself, use a named function expression instead. You can also assign the arrow function to a variable so it has a name.

// // Traditional Function
// function bob(a) {
//     return a + 100;
//   }

//   // Arrow Function
//   const bob2 = (a) => a + 100;

// What is implicit and explicit type in JS?

// Implicit type conversion is when JavaScript automatically converts a value to a different data type based on the context. Explicit type conversion is when you explicitly tell JavaScript to convert a value to a specific data type using a built-in function or method.

// # Function body

// Arrow functions can have either an expression body or the usual block body.

// In an expression body, only a single expression is specified, which becomes the implicit return value. In a block body, you must use an explicit return statement.

// const func = (x) => x * x;
// // expression body syntax, implied "return"

// const func2 = (x, y) => {
//   return x + y;
// };
// // with block body, explicit "return" needed

// Returning object literals using the expression body syntax (params) => { object: literal } does not work as expected.

// const func = () => { foo: 1 };
// // Calling func() returns undefined!

// const func2 = () => { foo: function () {} };
// // SyntaxError: function statement requires a name

// const func3 = () => { foo() {} };
// // SyntaxError: Unexpected token '{'

// #IIFE - Immediately Invoked Function Expressions-  is a function that is called immediately after it is defined.

//To create the IIFE, we first create the function declaration: functionName(). Then, once the function is defined, we:

// 1. Wrap parentheses around it. This creates the function expression
// 2. Add a second pair of parentheses at the end to immediately invoke it.

// (function functionName() {
//  console.log("Hey IIFE")
// })();

//  And that’s the entire syntax! Note that you may also use an anonymous function as part of the IIFE as well,

// (function () {
//     console.log("helllo nitesh")
//    })();

//-------------------------------Object Method--------------------------------------------

// Object method- Here we add a function inside an object and this is called Object method. Object methods are nothing but functions written inside objects as key- value pairs.

// let obj={
//     name: "nitesh",
//     age: 28,
//      add: function (a,b){                 // here "add" is the name of the function written in key manner and rest all is acted as a value. In other words, function add(a,b) { return a+b}

//         return a+b
//      },
// }

//---- object property- this!!!!----------
//this is a object property which indicate the vaule within the value with in the scope.
// example,
//

//  let name= "nitesh";
//  let object={
//     name:"kumar",
//     //person_name:function (name){
//         //console.log(name)     // when we call the function person_name(name)-->> it will catch or refer to name=nitesh, instead of name=kumar. Since the outside name is globally accessable. To fix this , we use the objection property -->> this.

//         person_name:function (){
//             let n=this.name
//             console.log(n)   // as we can see here the this is capturing the inscope value or referring to in scope name.
//     }
//  }

//  object.person_name()

// lets discussed on the object method,

// let rectsize={
//      l:10,
//      b:20,

//      area:function(){
//         return (this.l * this.b)
//      },
// perimeter:function(){
//     return(2*(this.l+this.b))
// }}

// console.log(rectsize.area())
// console.log(rectsize.perimeter())

// add and find the sum
// let obj = {
//   arr: [1, 2, 5, 8, 7,10, 4, 6, 9],
//   sum: function () {
//     let no = this.arr;
//     let sum = 0;
//     for (let i = 0; i < no.length; i++) {
//       sum += no[i];
//     }
//     return sum;
//   },
//   addelement: function(n){
//     this.arr.push(n)
//   }
// };

// console.log(obj.sum());
// obj.addelement(10);
// console.log(obj.sum());

// find the max and min

// let obj={ a:10, b:25, c:18, }

// let max=0, min=1000;
// for( let key in obj){
// if(obj[key]>max){
//     max=obj[key]
// }}
// for( let key in obj){
//     if(obj[key]<min){
//         min=obj[key]
//     }}

// console.log("max value :"+max)
// console.log("min value :"+min)

// // find the frequency of the alphabets
// let str="aaaabbbdddcchhhjjjsssskkkkiiiiefffffffffffsssssssssssttttzzzzzz"
// let obj={
// };

// for(let i=0;i<str.length;i++){
//     if(obj[str[i]]){
//         obj[str[i]]++

//     }
//     else{
//         let a=obj.arr
//         obj[str[i]]=1

//     }
// }
// console.log(obj)

//---------------------------------------------HOF-------------------------------------
// hof --->> Higher Oder Functions

// Types of functions

// 1) Anonymous Function-->> Its a function wihtout any name.
// function with name -->> function add() {// write your code}
// example  function (){ //write your code }

// 2) Name Function/ Function statements->> functions with name.
//  function add() {// write your code}

//3) function expression-->> anonymous function is allocated to a variable.

// let sum= function (){ // write your code }

//  ******** 4) Callback functions
// we can pass function inside  function as a arguments

// function parent(func){   // here func == callback because its been passed as params into the function from the call function.
//     console.log("parent function is been executed, now next function will be executed")
//     func ()     // here func()==> callback()
// }

// function callback(){
//     console.log("now we called the callback fn")
// }

// parent(callback) // here we have used callback function as argument and passed into the params of parent functions.

// callback function with dymanic values

// function sum (ope,a,b){
//     console.log( " the sum values are:----->>")
//     ope(a,b)
// }
// function add (a,b){
//     let val =  a+b;
//     console.log(val)
// }

// sum(add,10,5)

// HOF------>>>> iF A Function takes one or more callback  functions as an argument or return another function then it can be called HOF.

// iNbuilt function of JS are, map, forEach, filter, reduce +===> Only for arrays

// 1) Map->> iteration over an array  without any starting or ending condition,
// and also return a new modified array.

// let arr=[1,2,3,4,5]
//  let narr= arr.map(function (elements, index, arrayvalues){  // here we use HOF map, which contain the elements, index, and array values, and this 3 variables will always be constant, the name of the variables can be changed.
//     console.log(elements,index, arrayvalues)
//  })

// output ->> elements, index, array values
// 1   0    [ 1, 2, 3, 4, 5 ]
// 2   1    [ 1, 2, 3, 4, 5 ]
// 3   2    [ 1, 2, 3, 4, 5 ]
// 4   3    [ 1, 2, 3, 4, 5 ]
// 5   4    [ 1, 2, 3, 4, 5 ]

//

// let strarr=["hello", "my", "name ", "is", "nitesh"]

// let newarr= strarr.map(function(ele,ind,arr){
//     return ele+"!!"
// })
// console.log(strarr)
// console.log(newarr)

// iN map we create new array, and doesnt touch the original array.

// let arr=[1,2,3,4,5,6,7,8,9,10]

//         let narr=arr.map(function(ele,i){
//             if((i+1)%2==0){
//                 return (ele)
//             }
//             else {
//                return ""
//             }
//         })
// console.log(narr)

// 2) forEach -->> iTs always return undefine as a value, and nothing is returned.
// original value is not modified

// let arr =[12,14,16,18,20];
// let naar= arr.forEach(function(ele, i, array){
//    //  return ele*2 // as it doesnot return any value, it will show undefince.
//    console.log(ele*2)
// })

// console.log(naar)
// console.log(arr)

//  ## Differencce between the map and forEach---------------------->>

// 1. Return Value:->>
// forEach -> Its doesn't return anything. Its simply iterate over each element in the array and perform the specified operation on each elements. Its used when you want to perform an action on neach element without altering the original array.
// map-> it returns a new array conating the result of calling a provided function on every Element in the calling array. Its used when you want to transform each element of the array in some way and collect the result in new array.

// 2. Usage:->>
// forEach:->its doesnot retuen any value and always throw undefine when ever we try to fetch the deta via return method.
// map:->its always creat a new array and throw the value, the new value could be modified withou making any changes into the original values. Used in method chaning.

// 3)  Filter-->> The filter method in JavaScript is an array method that creates a new array with all elements that pass the test implemented by the provided function. In other words, it filters out elements from an array based on a specified condition.

// let arr=[1,2,3,4,5,6,7,8,9,10]

//         let narr=arr.filter (function(ele,i){ // filter is used to get the selected the data, here we are just selecting the data which could be divisible by 2 and reminder is 0.
//            return ele%2==0
//         })
// console.log(narr)

// 4) Reduce -->> It return only a single value(accumulator)

// let arr=[1,2,3,4,5,6,7,8,9,10]

// let narr=arr.reduce(function(accumulator, currentvalue){
//     console.log("the values are " +accumulator +" & " + currentvalue);
//     console.log (accumulator+currentvalue)
//     return accumulator+currentvalue
// })
// console.log(narr)

// here the accumulator is initial value of array(1) and currentvalue is 2nd index of array(2). We can keep the accumulator value anything by adding another value-->>

// let narr=arr.reduce(function(accumulator, currentvalue){
//     return accumulator+currentvalue
// },10) // here the 10=> accumulator as the initial value.

// ----------------------------DOM--------------------------

// DOM --> Document Object Model-->> Its basically connec the HTML, CSS with JS in the browser.Its a programming interface => convert HTML into iteratable objects.
//In the DOM, all HTML elements are defined as objects. The programming interface is the properties and methods of each object. A property is a value that you can get or set (like changing the content of an HTML element). A method is an action you can do (like add or deleting an HTML element).

//getElementById Method->> We find the id value in the HTLM document and then perform the actions on it.

// innerHTML Property-->> The innerHTML property can be used to get or change any HTML element, including <html> and <body>.

// # Finding HTML Elements
// Method -	Description
// document.getElementById(id)- 	Find an element by element id
// document.getElementsByTagName(name)- 	Find elements by tag name
// document.getElementsByClassName(name)- 	Find elements by class name

// Changing HTML Elements
// Property -	Description
// element.innerHTML =  new html content ->	Change the inner HTML of an element
// element.attribute = new value ->		Change the attribute value of an HTML element
// element.style.property = new style ->		Change the style of an HTML element

// Method 	Description
// element.setAttribute(attribute, value) ->	Change the attribute value of an HTML element

// Adding and Deleting Elements
// Method -->>	Description
// document.createElement(element) -->>	Create an HTML element
// document.removeChild(element) -->>	Remove an HTML element
// document.appendChild(element) 	-->>Add an HTML element
// document.replaceChild(new, old) -->> Replace an HTML element
// document.write(text) -->>	Write into the HTML output stream

//CRUD --->>> Creat, Read, Update, Delete

// Events--->> onClick, onChange both are used on buttom,

//----------------------Function Methods---------------------------

// 3 types of function methods-? call, apply, and bind

// let fruit1={
//     fruitname:"Apple"
// }

// function fruitName(){
//     console.log(fruitname) // the output will be undefine
//     console.log(this.fruitname)  // here this will refer to fruit1 object->fruitname.
// }

// In above, we have one objection inside which we have furitname->"Apple."
// Second we have function fruitName, inside which we are printing the name of the fruit from fruit1 object by using this method.

// fruitName.call(fruit1) // here we will use and execute the call function.

// apply is similar to call, but the way of passing arugument is different. In call we always pass object-> first and then we pass other parameter. Where as in apply, the object position is same and other parameter will be wrapped into the array.

// Bind-->> Its return a function.and rest all is same. It need to be invoked.

// How to create object? -> 3 ways

// Literal method

// 1) Object Literals

// let game1= {
//     gameName: "COD",
//     genre: "FPS"
// }
// let game2= {
//     gameName: "COC",
//     genre: "TPS"
// }
// let game3= {
//     gameName: "GTA",
//     genre: "oPEN wORLD"
// }

// The above code is used to create 3 different object which is the simplest way to create the object.

// 2) Factory Function -->> Here we are doing the same thing what ew did in previosu code but the piece of code is been reduced.

// function gameDate(name, genre){
//     let obj={};
//     obj.name=name;
//     obj.gener=genre;
// }

// 3) Constructor Function

// function GameDate(name, genre){ // here the JS is implicitly creating an object and using this method we are allocating the key and value dat inside it.
//     this.name=name;
//     this.gener=genre;
// }

// let game1= new GameDate("POP", "TPV")  // here we are feeding the data in that implicit object.
// let game2= new GameDate("COC", "TPV")

//---------------------------Inheritance & Prototype-------------------------------------

//Prototype -->> Its a way in which we can inherite the data from globsl/windows when its not avaliable in the current object. All JavaScript objects inherit properties and methods from a prototype.
// We also learned that you can not add a new property to an existing object constructor:

// function GameDate(name, genre){
//     this.name=name;
//     this.gener=genre;
// }
// GameData.year= 1898 //Here we cant add or update the original object and the only way is by adding it inside the object { adde on key-value pairs}

// let Parent={
//     pet: "Ret"
// }

//  let child= Object.create(Parent)

//  child.pet=" Lion" // here we are allocating a pet to child

// console.log (child.pet) // here the Js will check the pet key inside the child and if its unable to find it then will go for it parent prototype nd check the same.

// setPrototypeOf is used to club the 2 object into one. TO do so, we need to ==>> Object.setProtptypeOf(obj1, obj2), here we the property values of obj2 is added into obj1. and when we access obj1 we will get the bot obj1 and obj2 values.

// -------------------------------Async Programming---------------------------

// Execution COntext-> its has 2 parts->a. Creation phase/ memory phase; b. Execution phase

// In creation phase we declare all the key, variable name, objection as undefine and function are declared as function itself.
// Execution phase will declare the above key with values and if some thing is not declared then JS will declare it as undefined.

// Async tools-> setTimeout, setInterval, clearTimeout, clearInterval

//---------------------------------------Promise-----------------------------
// What is Hoisting in JavaScript | Hoisting Functions, Variables and Classes.
//Hoisting is a concept or behavior in JavaScript where the declaration of a function, variable, or class goes to the top of the scope they were defined in.
// In other words, when the program is runned, JS skimm through the code and declar the variable, objects as undefine and function as it is, and in execution phase it initilate the value. So , if we declare a variable before it initialiaition it will throw an output of undefine but if we use let/ const and do the same thing we will land into an error of let/const is not iniitialiazed.

// Promise is an alternative for Callback Hell.
// Promise has 3 values-> Pending(Default value); Resolve; finally
// and 3 state-> pending, resolve, reject

// the below code is example of  callback hell,Difficult to understand and maintaine.

// function getData(callbackWalaFn) {
//   let data = [];
//   setTimeout(function(){
//     data=[
//     { prodName: "hat", price: 500 },
//     { prodName: "shirt", price: 800 },
//     { prodName: "pant", price: 1200 },
//     ];
//   callbackWalaFn(data)
// },2000);
//   //return data;
// }

// function findProd(item) {
//   //let data = getData();
  
//   getData(function (dataarr){
//     let newData = dataarr.filter(function (ele) {
//         return ele.prodName === item;
//       });
//       console.log(newData)
//   })

// }

// findProd("shirt");
// console.log(getData())

// Promise is a object, and object are been created via constructor function.

// let examplePromise= new Promise(function (resolvewala, rejectwala){ // we created a promise via new key word.
//     resolvewala("code is resolved") // resolvewala = resolve,  which means, if the code is resolved, it will pass resolvewala
//     rejectwala("code is not resolve") // rejectwala = reject,  which means, if the code is not resolved, it will pass rejectwala
// })
// .then(function(res){    // then will run only when resolve is returned from promised
//     console.log(res)
// })
// .catch(function(rej){ // catch will run only when reject is returned from promised
//     console.log(rej)
// })
// .finally(function(){ // finally will run, always
//     console.log("done")
// })


// let flag =true;
// let data;
// let promise= new Promise(function (res, rej){

// setTimeout(function(){
//     if (flag){
// let data=[
//     { prodName: "hat", price: 500 },
//     { prodName: "shirt", price: 800 },
//     { prodName: "pant", price: 1200 },
//     ];
//     res (data)
// }
// else {
//     rej("code cant be executed")
// }
// },2000)
// })
// .then(function (res){
//     data=res
//     console.log(data +" code has been executed")
// })
// .catch(function(rej){
//     console.log(rej)
// })
// .finally(function(){
//     console.log("JS had checked the code")
// })

// Simple problem on promise

// function makePromise(status){
//     return new Promise ( function (res, rej) {
//         setTimeout(() => {
//             if(status){
//                 res(" Promised resolved")
//             }
//             else {
//                 rej("Promise rejected")
//             }
//         }, 2000);
//     })
// }

// makePromise(true)
// .then(function (res){
//     console.log(res)
// })
// .catch(function (rej){
//     console.log(rej)
// })


//Problem:

// Create a function called fetchData that simulates fetching data from an API. This function should return a promise. If the data is successfully fetched, the promise should resolve with the fetched data after a delay of 2 seconds. If there's an error during fetching, the promise should reject with an error message after a delay of 2 seconds.

// function fetchDate(){
//     return new Promise (function (res, rej){
//         setTimeout(function (){
//             let no= Math.random();
//             if(no<0.5){
//                 res("the code is completed")
//             }
//             else{
//                 rej("the code is rejected")
//             }

//         },2000)
//     })
// }

// fetchDate()
// .then(function(res){
//     console.log(res)
// })
// .catch(function(rej){
//     console.log(rej)
// })

//Create a function called sumAsync that takes two numbers as arguments and returns a promise. This promise should resolve with the sum of the two numbers after a delay of 1 second.
// let sum;
// function sumAsync(a,b){
//     return new Promise( function (res, rej) {
//         setTimeout(function (){
//             if(a !== undefined || b !== undefined) {
//                 sum=a+b
//                 res(sum)
//             }
//             else{
//                 rej("the a or b is not defined")
//             }
//         },1000)
//     })
// }

// sumAsync(10,5)
// .then(function (res){
//     console.log(res)
// })
// .catch(function (rej){
//     console.log(rej)
// })

// Simple payment system

// function orderPlace(){
//     return new Promise (function (res, rej){
//         setTimeout(function (){
//             console.log("order Placed")
//             res()
//         },1000)
//     })
// }

// function paymentPage(){
//     return new Promise (function (res, rej){
//         setTimeout(function (){
//             console.log("Payment done")
//             res() 
//         },1000)
//     })
// }

// function showDetails(){
//     return new Promise (function (res, rej){
//         setTimeout(function (){
//             console.log("receipt generated")
//             res()
//         },1000)
  
//     })
// }

// orderPlace()
// .then(paymentPage)
// .then(showDetails)
// .then(function (){console.log("all the code executed")})

//-----------------------------------------------Fetch---------------------------------

// API-->> Application Programming Interface - Its connects 2 softwares.
// GET=> Read  
// POST=> Creat
// PATCH => Update
// DELETE => Delete

// AJAX- Asynchronous JavaScript And XML- For network request from javascript. 

// Fetch==>> The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest. 

// fetch("https://reqres.in/api/users?page=2")
// .then(function(res){
//     return res.json()
// })
// .then(function(res){
//     console.log(res)
// })

