export class Student {
    regno: number;
    studentName: string;
    studentMarks: number;

    constructor(regno: number=0, studentName: string="", studentMarks: number=0){
        this.regno = regno;
        this.studentName = studentName;
        this.studentMarks = studentMarks;
    }
}
