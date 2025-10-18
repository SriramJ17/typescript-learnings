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
var Employee = /** @class */ (function () {
    function Employee(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "".concat(this.name, " earns \u20B9").concat(this.salary, " per month.");
    };
    Employee.prototype.calculateBonus = function () {
        return this.salary * 0.10;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary, teamSize) {
        var _this = _super.call(this, name, salary) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.calculateBonus = function () {
        return this.salary * 0.20;
    };
    Manager.prototype.getDetails = function () {
        return "".concat(this.name, " manages a team of ").concat(this.teamSize, " people and earns \u20B9").concat(this.salary, " per month.");
    };
    return Manager;
}(Employee));
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary, programmingLanguage) {
        var _this = _super.call(this, name, salary) || this;
        _this.programmingLanguage = programmingLanguage;
        return _this;
    }
    Developer.prototype.calculateBonus = function () {
        return this.salary * 0.15;
    };
    Developer.prototype.getDetails = function () {
        return "Developer ".concat(this.name, " code in ").concat(this.programmingLanguage, " and earns \u20B9").concat(this.salary, " per month.");
    };
    return Developer;
}(Employee));
var Intern = /** @class */ (function (_super) {
    __extends(Intern, _super);
    function Intern(name, salary, duration) {
        var _this = _super.call(this, name, salary) || this;
        _this.duration = duration;
        return _this;
    }
    Intern.prototype.calculateBonus = function () {
        return this.salary * 0.15;
    };
    Intern.prototype.getDetails = function () {
        return "Intern ".concat(this.name, " is working for ").concat(this.duration, " with a stipend of \u20B9").concat(this.salary, " per month.");
    };
    return Intern;
}(Employee));
var employees = [
    new Manager("Sriram", 20000, 10),
    new Developer("Jayaraman", 10000, "Typescript"),
    new Intern("Intern_1", 2000, 60)
];
for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
    var employee = employees_1[_i];
    console.log(employee.name);
    console.log(employee.getDetails());
    console.log(employee.calculateBonus());
    console.log("*****************************");
}
