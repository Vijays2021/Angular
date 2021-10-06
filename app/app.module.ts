import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
//import { employlistComponent } from './employ/employlist.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProductfilterPipe } from './pipes/productfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    //employlistComponent,
    ProductComponent,
    EmployeeComponent,
    ProductfilterPipe

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
