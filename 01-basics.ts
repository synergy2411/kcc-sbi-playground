// Arrow function - Lambda Expr
//  - without curly brace
//  - with curly brace

// ES5
// var numbers = [1,2,3,4,5];
// var doubleArray = numbers.map(function(value){
//     return value * 2;
// })
// console.log(doubleArray);

// ES6

// var doubleArray = numbers.map(value => value * 2 );
// var doubleArray = numbers.map((value, index) => {
//     console.log(value, index);
//     return value * 2;
//  });
// console.log(doubleArray);

// - don't have 'this' keyword; it borrow the 'this' ref from the outer scope

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getDetails : function(){
//         // return "Hello " + this.firstName + " " + this.lastName
//         // var self = this;
//         // return function(){
//         //     return "Hello " + self.firstName + " " + self.lastName;
//         // }
//         return () => "Hello " + this.firstName + " " + this.lastName;    
//     }
// }
// var innerFunc = user.getDetails();
// console.log(innerFunc());           // Hello .....  ......
















// Template String - " " | ' ' | ` ` 
//  - Multi-line string
//  - Embed the variable within string

// var email = "test@test.com";

// var str = `Hello ${email}, 
// How are you?`

// console.log(str);


















// Constants and block scope - restrict the scope to the nearest curly braces
//  - let 
//  - const

// function display(arr){
//     if(arr.length > 2){
//         var FLASH = "Flashing"
//         console.log(LOAD);          // undefined
//     }else{
//         var LOAD = "Loading"
//     }
// }

// display([1,2,3]);


// const USER = "Foo";
// USER = "Bar";

const USER = {
    name : "Foo"
}

USER.name = "Bar";
console.log(USER);      // ?
















// Destructuring
// •
// Spread & Rest operator

// •
// Classes & Inheritance
// •
// Module system
// •
// •
// Decorator
// •
// Additional types
