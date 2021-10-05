import { Component } from "@angular/core";

@Component({
  selector : 'employee-comp',
  templateUrl : './employee.component.html',
  styleUrls : ['./employee.component.css']
})
export class EmployeeComponent {
      employeeName : string = 'Abcd'
      age : number = 24
      location : string = 'Chennai'
      isAvailable : boolean = true
      photoPath : string = "assets/images/employee.jpg"
      status : boolean = false

    handleClick() : void{
      console.log("Button clicked");
    }  
}
