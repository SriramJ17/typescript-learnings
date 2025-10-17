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
var Vehicle = /** @class */ (function () {
    function Vehicle(brand) {
        this.brand = brand;
    }
    Vehicle.prototype.displayInfo = function () {
        return "This is a vehicle made by ".concat(this.brand);
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(brand, numDoors) {
        var _this = _super.call(this, brand) || this;
        _this.numDoors = numDoors;
        return _this;
    }
    Car.prototype.displayInfo = function () {
        return "This is a ".concat(this.brand, " car with ").concat(this.numDoors, " doors.");
    };
    return Car;
}(Vehicle));
var Bike = /** @class */ (function (_super) {
    __extends(Bike, _super);
    function Bike(brand, type) {
        var _this = _super.call(this, brand) || this;
        _this.type = type;
        return _this;
    }
    Bike.prototype.displayInfo = function () {
        return "This is a ".concat(this.type, " bike made by ").concat(this.brand, ".");
    };
    return Bike;
}(Vehicle));
var car1 = new Car("BMW", 4);
var bike1 = new Bike("Yamaha", "Sport");
console.log(car1.displayInfo());
console.log(bike1.displayInfo());
