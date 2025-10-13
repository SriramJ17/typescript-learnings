class Student {
    name: string;
    marks: number[];

    constructor (name: string,  marks: number[]) {
        this.name = name;
        this.marks = marks;
    }

    getAverage () {
        let total = 0;
        for (let mark of this.marks) {
            total = total + mark;
        }

        return total/this.marks.length;
    }

    getGrade () {
        const average = this.getAverage();

        if (average>90) {
            return "A"
        }
        if (average>=80) {
            return "B"
        }
        if (average>=70) {
            return "C"
        }
        if (average>=60) {
            return "D"
        }

    }
}

let student_1 = new Student ("Sriram" , [100,90,88,93])
console.log(student_1.getAverage())
console.log(student_1.getGrade())