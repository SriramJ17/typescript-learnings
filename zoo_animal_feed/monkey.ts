import { Animal } from "./animal";

export class monkey extends Animal {
    constructor(type:string) {
        super(type)
    }
    
    feed(): string {
        return "banana"
    }
}