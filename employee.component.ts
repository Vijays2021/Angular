import { Component } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  employees: Employee[];
  constructor() {
    this.employees = [
      new Employee("E001", "ABCD", "123", 45000.0, new Date("November 23,1998"), "Training", "Trainee", "hyderabad", 5),
      new Employee("E002", "EFGH", "456", 35000.0, new Date(), "Training", "Trainee", "hyderabad", 4),
      new Employee("E003", "IJKL", "789", 55000.0, new Date("November 23,2017"), "Training", "Trainee", "hyderabad", 3),
      new Employee("E004", "MNOP", "123", 65000.0, new Date("November 23,2018"), "Training", "Trainee", "hyderabad", 1),
      new Employee("E005", "vijay", "", 45000.0, new Date("November 23,1999"), "Training", "Trainee", "hyderabad", 5),
      new Employee("E006", "QRST", "456", 35000.0, new Date("November 23,2011"), "Training", "Trainee", "hyderabad", 8),
      new Employee("E007", "XYZ", "789", 25000.0, new Date("November 23,1999"), "Training", "Trainee", "hyderabad", 7)
    ];
  }
}