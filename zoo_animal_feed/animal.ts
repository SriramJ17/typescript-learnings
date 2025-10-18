export class Animal {
    type:string;

    constructor(type:string) {
        this.type=type;
    }

    feed(): string {
        return "fruits"
    }
}