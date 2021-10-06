import { elementEventFullName } from "@angular/compiler/src/view_compiler/view_compiler";

export class Employee {
    employeeId : string;
    firstName : string;
    lastName : string;
    salary : number;
    joindate : Date;
    department : string;
    designation : string;
    location : string;
    grading : number;

    constructor(employeeId : string,firstName : string,lastName : string,salary : number,joindate : Date,department : string,designation : string,location : string,grading : number){
         this.employeeId = employeeId;
         this.firstName = firstName;
         this.lastName = lastName;
         this.salary = salary;
         this.joindate = joindate;
         this.department = department;
         this.designation = designation;
         this.location = location;
         this.grading = grading;
}
fullName():string{
    return this.firstName + " " + this.lastName;
}
}
