var Student = /** @class */ (function () {
    function Student(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    Student.prototype.getAverage = function () {
        var total = 0;
        for (var _i = 0, _a = this.marks; _i < _a.length; _i++) {
            var mark = _a[_i];
            total = total + mark;
        }
        return total / this.marks.length;
    };
    Student.prototype.getGrade = function () {
        var average = this.getAverage();
        if (average > 90) {
            return "A";
        }
        if (average >= 80) {
            return "B";
        }
        if (average >= 70) {
            return "C";
        }
        if (average >= 6090) {
            return "D";
        }
    };
    return Student;
}());
var student_1 = new Student("Sriram", [100, 90, 88, 93]);
console.log(student_1.getAverage());
console.log(student_1.getGrade());
