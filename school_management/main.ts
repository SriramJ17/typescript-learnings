import { Person } from "./person";
import { Student } from "./student";

let person:Person[] = [
    new Student("Amrita",24,"Grade A")
]

for (let x of person) {
    console.log(x.getDetails())
}