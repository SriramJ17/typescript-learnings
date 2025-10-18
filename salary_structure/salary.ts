class Employee {
    name: string;
    salary: number;

    constructor(name: string, salary: number) {
        this.name=name;
        this.salary=salary;
    }

    getDetails():string {
        return `${this.name} earns ₹${this.salary} per month.`
    }

    calculateBonus():number {
        return this.salary * 0.10
    }
}

class Manager extends Employee {
    teamSize: number;
    constructor(name: string, salary: number,teamSize: number) {
        super(name,salary)
        this.teamSize=teamSize;
    }

    calculateBonus():number {
        return this.salary * 0.20
    }

    getDetails():string {
        return `${this.name} manages a team of ${this.teamSize} people and earns ₹${this.salary} per month.`
    }
}

class Developer extends Employee {
    programmingLanguage: string;
    constructor(name: string, salary: number,programmingLanguage: string) {
        super(name,salary)
        this.programmingLanguage=programmingLanguage;
    }

    calculateBonus():number {
        return this.salary * 0.15
    }

    getDetails():string {
        return `Developer ${this.name} code in ${this.programmingLanguage} and earns ₹${this.salary} per month.`
    }
}

class Intern extends Employee {
    duration: number;
    constructor(name: string, salary: number,duration: number) {
        super(name,salary)
        this.duration=duration;
    }

    calculateBonus():number {
        return this.salary * 0.15;
    }

    getDetails():string {
        return `Intern ${this.name} is working for ${this.duration} with a stipend of ₹${this.salary} per month.`
    }
}

let employees:Employee[] = [
    new Manager("Sriram",20000,10),
    new Developer("Jayaraman",10000,"Typescript"),
    new Intern("Intern_1",2000,60)
]

for (let employee of employees) {
    console.log(employee.name);
    console.log(employee.getDetails())
    console.log(employee.calculateBonus())
    console.log("*****************************")
}