import { Person } from "./person";

export class Student extends Person {
    grade:string;
    constructor(name:string,age:number,grade:string) {
        super(name,age)
        this.grade=grade;
    }
    getDetails():string {
        return `${this.name}` + " " + "is" + " " + `${this.age}` + " " + "has scored" + `${this.grade}` + " in English."
    }
}