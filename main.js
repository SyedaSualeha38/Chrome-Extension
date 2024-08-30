var person = /** @class */ (function () {
    function person(user_name, user_age) {
        this.pin = 12345;
        this.name = user_name;
        this.age = user_age;
        this.salary = 50000;
    }
    person.prototype.updateAge = function (age) {
        this.age = age;
    };
    person.prototype.displaySalary = function (pin) {
        if (pin === this.pin) {
            console.log(this.salary);
        }
        else {
            console.log("chala jaa");
        }
    };
    return person;
}());
