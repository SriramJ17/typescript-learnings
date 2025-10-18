import { Animal } from "./animal";

export class elephant extends Animal {
    constructor(type:string) {
        super(type)
    }
    
    feed(): string {
        return "grass"
    }
}