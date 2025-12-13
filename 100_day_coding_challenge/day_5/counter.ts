class Counter {
    private value: number;

    constructor() {
        this.value=0;
    }

    increment():void {
        this.value=this.value+1;
    }

    decrement():void {
        this.value=this.value-1;
    }

    getValue(): number {
        return this.value;
    }
}

const counter = new Counter();
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.getValue())