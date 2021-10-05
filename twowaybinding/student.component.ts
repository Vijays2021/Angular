import { Component, OnInit } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  /*regno: number = 76786765
  studentName: string = 'Vijay'
  studentMarks: number = 1150*/

  studentModel : Student;

  constructor(){
    this.studentModel = new Student();
  }

}
