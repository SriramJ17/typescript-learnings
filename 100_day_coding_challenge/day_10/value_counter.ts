class Counter {
    count:number=0;

    increment():void {
        this.count=this.count+1;
    }

    decrement():void {
        this.count=this.count-1;
    }

    getValue(): number {
        return this.count;
    }
    
}

const counter = new Counter();

counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getValue());