"use strict";
var Person = (function () {
    function Person() {
    }
    Person.prototype.costructor = function (name, surname, mail) {
        this.firstName = name;
        this.lastName = surname;
        this.email = mail;
    };
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getSurname", {
        get: function () {
            return this.lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getEmail", {
        get: function () {
            return this.email;
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=Person.js.map