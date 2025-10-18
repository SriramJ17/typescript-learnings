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
var SmartDevice = /** @class */ (function () {
    function SmartDevice(name, status) {
        this.name = name;
        this.status = status;
    }
    SmartDevice.prototype.turnOn = function () {
        this.status = true;
    };
    SmartDevice.prototype.turnOff = function () {
        this.status = false;
    };
    SmartDevice.prototype.getStatus = function () {
        var state = this.status ? "ON" : "OFF";
        return "".concat(this.name, " is is ").concat(state);
    };
    return SmartDevice;
}());
var Light = /** @class */ (function (_super) {
    __extends(Light, _super);
    function Light(name, status) {
        return _super.call(this, name, status) || this;
    }
    Light.prototype.getStatus = function () {
        return "".concat(this.name, " Light is ").concat(this.status ? "ON" : "OFF");
    };
    return Light;
}(SmartDevice));
var Fan = /** @class */ (function (_super) {
    __extends(Fan, _super);
    function Fan(name, status) {
        return _super.call(this, name, status) || this;
    }
    Fan.prototype.getStatus = function () {
        return "".concat(this.name, " is ").concat(this.status ? "ON" : "OFF");
    };
    return Fan;
}(SmartDevice));
var Thermostat = /** @class */ (function (_super) {
    __extends(Thermostat, _super);
    function Thermostat(name, status, temperature) {
        var _this = _super.call(this, name, status) || this;
        _this.temperature = temperature;
        return _this;
    }
    Thermostat.prototype.getStatus = function () {
        return "".concat(this.name, " is ").concat(this.status ? "ON" : "OFF", " at ").concat(this.temperature);
    };
    return Thermostat;
}(SmartDevice));
var devices = [
    new Light("Tube", true),
    new Fan("Havells", false),
    new Thermostat("ABC", true, 90)
];
for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
    var v = devices_1[_i];
    console.log(v.getStatus());
}
