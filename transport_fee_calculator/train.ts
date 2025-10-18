import { Transport } from './transport';

export class Train extends Transport {
    constructor(distance:number,type:string) {
        super(distance,type)
    }

    calculateFare(): number {
        return this.distance*5;
    }
}