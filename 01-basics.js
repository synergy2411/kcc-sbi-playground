"use strict";
// Arrow function - Lambda Expr
//  - without curly brace
//  - with curly brace
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
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
// const USER = {
//     name : "Foo"
// }
// USER = {
//     name : "Bar"
// }
// USER.name = "Bar";
// console.log(USER);      // Foo
// Array, Objects, Functions are reference types - Principle of immutability
// Destructuring - Array / Objects
// let arr = ["Foo", "Bar","Bam","Baz"];
// let [arr1, arr3, arr4] = arr;
// console.log(arr3);      // Bar
// let myFunc = {
//     drawCircle : r => Math.PI * r,
//     drawText : text => "Sample " + text,
//     drawRect : (w,l) => 2 * w* l
// }
// // console.log(myFunc.drawCircle(3));
// let {drawCircle : dc, drawRect : dr, drawText : dt} = myFunc;
// console.log(dt("Some String"));
// // Nested Destructuring
// let user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 32,
//     address : {
//         city : "Bengaluru",
//         street : "201, Main Road, Richmond Circle"
//     },
//     friends : ["Bam", "Bas"]
// }
// let {
//     firstName : fn, 
//     lastName : ln,
//     age : ag,
//     address : {
//         city : ct,
//         street : st
//     },
//     friends : [f1, f2]
// } = user;
// console.log(ln, ag, ct, f2);
// let users = [
//     {email : "test@test.com", age : 32},
//     {email : "test1@test.com", age : 34},
//     {email : "test2@test.com", age : 36},
// ]
// Spread & Rest operator (...)
//  - Spread : spreads the collections into individual items
//  - Rest : creates the collection from individual items
// let magicNumbers = [3,4,5];
// let numbers = [1,2,...magicNumbers, 6,7];
// // let numbers = [1,2,magicNumbers, 6,7];
// console.log(numbers);           
// [1,2,3,4,5,6,7]
// [1,2,[3,4,5],6,7]
// function demo(email, ...args : Array<any>){
//     console.log(args[0]);          // ?
// }
// demo("test@test.com")
// demo("test@test.com", 32)
// demo("test@test.com", 32, true)
// Classes & Inheritance
var person_1 = require("./person");
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, email) {
        var _this = _super.call(this, email) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        return _this;
    }
    Student.prototype.getDetails = function () {
        return "Hello from " + this.firstName + " " + this.lastName + "!";
    };
    Student.prototype.getLuckyNumber = function () {
        return person_1.MAGIC_NUMBER;
    };
    return Student;
}(person_1.Person));
console.log(person_1.getDailyFortune());
var foo = new Student("Foo", "Bar", "foo@test.com");
console.log(foo.getDetails());
console.log(foo.getLuckyNumber());
// Module system
// •
// •
// Decorator
// •
// Additional types
