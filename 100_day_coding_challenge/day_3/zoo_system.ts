interface Animal {
    makeSound(): string
}

class Lion implements Animal {
    name:string;

    constructor(name:string) {
        this.name=name
    }

    makeSound():string {
        return `SOUND_1`
    }
}

class Monkey implements Animal {
    name:string

    constructor(name:string) {
        this.name=name
    }

    makeSound():string {
        return `SOUND_2`
    }
}

class Elephant implements Animal {
    name:string

    constructor(name:string) {
        this.name=name
    }

    makeSound():string {
        return `SOUND_3`
    }
}

let animals:Animal[]=[
    new Lion("LION"),
    new Elephant("ELEPHANT"),
    new Monkey("MONKEY")
]

for (let i of animals) {
    console.log(i.makeSound())
}