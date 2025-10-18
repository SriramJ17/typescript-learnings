This exercise focus on the following

Goal: Use inheritance for devices, and polymorphism for how they operate.

Requirements:

Create a base class `SmartDevice` with properties:

`name: string`

`status: boolean (on/off)`

`Methods: turnOn(), turnOff(), getStatus()`

Create subclasses:

`Light` → overrides getStatus() to say “Light is glowing”

`Fan` → overrides getStatus() to say “Fan is spinning”

`Thermostat` → adds a property temperature and overrides getStatus() accordingly.

Create an array of devices and loop through it — print each device’s getStatus() (use polymorphism).