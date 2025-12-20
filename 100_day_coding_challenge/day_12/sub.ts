class Subtract {
    sub(a:number,b:number):number {
        return a-b
    }
}

const result = new Subtract().sub(4,3)
console.log(result)