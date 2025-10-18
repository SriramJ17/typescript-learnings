import { Bus } from './bus';
import { Taxi } from './taxi';
import { Train } from './train';
import { Transport } from './transport';

let transport:Transport[] = [
    new Bus(20,"Bus"),
    new Taxi(20,"Taxi"),
    new Train(20,"Train")
]

for (let t of transport) {
    console.log(`${t.type} fare is ${t.calculateFare()}`);
    console.log("**********************")
}