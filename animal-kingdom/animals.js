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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.makeSound = function () {
        return "Some generic animal sound";
    };
    Animal.prototype.move = function () {
        return "The animal moves around";
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.makeSound = function () {
        return "woof woof";
    };
    Dog.prototype.move = function () {
        return "The dog runs around happily";
    };
    return Dog;
}(Animal));
var Bird = /** @class */ (function (_super) {
    __extends(Bird, _super);
    function Bird(name) {
        return _super.call(this, name) || this;
    }
    Bird.prototype.makeSound = function () {
        return "Tweet! Tweet!";
    };
    Bird.prototype.move = function () {
        return "The bird flies in the sky";
    };
    return Bird;
}(Animal));
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name) {
        return _super.call(this, name) || this;
    }
    Fish.prototype.makeSound = function () {
        return "Blub blub (underwater sound)";
    };
    Fish.prototype.move = function () {
        return "The fish swims in the water";
    };
    return Fish;
}(Animal));
var animals = [
    new Dog("Tiger"),
    new Bird("Pigeon"),
    new Fish("Shark")
];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log(animal.name);
    console.log(animal.makeSound());
    console.log(animal.move());
    console.log("----------------");
}
