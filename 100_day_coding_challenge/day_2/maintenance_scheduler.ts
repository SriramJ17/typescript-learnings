interface Maintainable {
    getNextServiceDate(): string;
}

abstract class Vehicle {
    brand: string;
    model: string;
    lastServiceDate: string;

    constructor(brand:string,model:string,lastServiceDate:string) {
        this.brand=brand,
        this.model=model,
        this.lastServiceDate=lastServiceDate
    }

    details():string {
        return `${this.brand} ${this.model} last serviced on ${this.lastServiceDate}`
    }

    abstract getNextServiceDate(): string;
}

class Car extends Vehicle {
    getNextServiceDate(): string {
        const [year, month, day] = this.lastServiceDate.split("-").map(Number);
        let remainingDays:number = 180;

        let newDay = day + remainingDays;
        let newMonth = month;
        let newYear = year;

        while (newDay > 30) {
            newDay -= 30;
            newMonth += 1;
        }

        while (newMonth > 12) {
            newMonth -= 12;
            newYear += 1;
        }

        return `${newYear}-${newMonth}-${newDay}`;
    }
}

let c = new Car("BMW","X7","2025-01-01")
console.log(c.getNextServiceDate())