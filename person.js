"use strict";
exports.__esModule = true;
exports.getDailyFortune = exports.MAGIC_NUMBER = exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(email) {
        this.email = email;
    }
    Person.prototype.jump = function () {
        return "hey " + this.email + ", I am jumping!";
    };
    return Person;
}());
exports.Person = Person;
exports.MAGIC_NUMBER = Math.round(Math.random() * 10);
function getDailyFortune() {
    return "Run 5 kms everyday";
}
exports.getDailyFortune = getDailyFortune;
