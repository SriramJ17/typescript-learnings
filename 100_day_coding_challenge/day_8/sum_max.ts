class NumberAnalyzer {
    analyze(numbers: number[]) {
        let sum:number=0;
        let max=numbers[0];
        for (let i of numbers) {
            sum += i;
            if (i > max) {
                max=i;
            }
        }
        return [sum,max]
}}

const analyze=new NumberAnalyzer();
const result = analyze.analyze([3, 7, 2, 9, 4]);

console.log(result)