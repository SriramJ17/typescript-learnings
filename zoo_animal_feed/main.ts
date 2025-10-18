import { Animal } from "./animal";
import { lion } from "./lion";
import { elephant } from "./elephant";
import { monkey } from "./monkey";

let animals:Animal[] = [
    new lion("Lion"),
    new elephant("Elephant"),
    new monkey("Monkey")
]

for (let x of animals) {
    console.log (`${x.type}` + " " +  "eats" + " " + `${x.feed()}`);
}