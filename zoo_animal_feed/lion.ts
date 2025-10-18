import { Animal } from "./animal";

export class lion extends Animal {
    constructor(type:string) {
        super(type)
    }
    
    feed(): string {
        return "meat"
    }
}