class SmartDevice {
    name: string;
    status: boolean;

    constructor(name:string,status:boolean) {
        this.name=name;
        this.status=status
    }

    turnOn(): void {
        this.status = true;
    }

    turnOff(): void {
        this.status = false;
    }

    getStatus(): string {
        const state = this.status ? "ON" : "OFF";
        return `${this.name} is ${state}`
    }
}

class Light extends SmartDevice {
    constructor(name:string,status:boolean) {
        super(name,status)
    }
    
    getStatus(): string {
         return `${this.name} Light is ${this.status ? "ON" : "OFF"}`
    }
}

class Fan extends SmartDevice {
    constructor(name:string,status:boolean) {
        super(name,status)
    }
    
    getStatus(): string {
         return `${this.name} is ${this.status ? "ON" : "OFF"}`
    }
}

class Thermostat extends SmartDevice {
    temperature:number;
    constructor(name:string,status:boolean,temperature:number) {
        super(name,status)
        this.temperature=temperature
    }
    
    getStatus(): string {
         return `${this.name} is ${this.status ? "ON" : "OFF"} at ${this.temperature} degrees`
    }
}

let devices:SmartDevice[] = [
    new Light("Tube",true),
    new Fan("Havells",false),
    new Thermostat("ABC",true,90)
]

for (let v of devices) {
    console.log(v.getStatus())
}