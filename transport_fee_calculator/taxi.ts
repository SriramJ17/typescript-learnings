import { Transport } from './transport';

export class Taxi extends Transport {
    constructor(distance:number,type:string) {
        super(distance,type)
    }

    calculateFare(): number {
        return this.distance*15;
    }
}
