export class Transport {
    distance: number;
    type: string;

    constructor (distance:number,type:string) {
        this.distance=distance;
        this.type=type;
    }

    calculateFare(): number {
        return this.distance*10;
    }
}