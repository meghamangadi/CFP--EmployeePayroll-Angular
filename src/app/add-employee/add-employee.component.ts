import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  employeeFormGroup: FormGroup;
 
  employee:any={};
 
  constructor(private fb: FormBuilder) {}
  ngOnInit(){
    this.createEmployeeDetails();
  }
  createEmployeeDetails(){
    this.employeeFormGroup=this.fb.group({
      empName: [null,Validators.required],
      profilePic: [null,Validators.required],
      empGender: [null,Validators.required],        
      note: [null,Validators.required],
      empSalary:[null,Validators.required]
    })
  }
  salaryOutput: number = 400000;
  updateSetting(event) {
    this.salaryOutput = event.value;
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  onSubmit() {
    console.log(this.employeeFormGroup.value);      
    this.employee= Object.assign(this.employee,this.employeeFormGroup.value);
    this.addMultipleEmployee( this.employee); 
    this.employeeFormGroup.reset();
  }
  addMultipleEmployee(employee){
    let emp=[];
    if(localStorage.getItem('EmployeeDetails')){

      emp=JSON.parse(localStorage.getItem('EmployeeDetails'))
      emp=[employee,...emp];
    }else{

      employee=[employee];
    }
    localStorage.setItem('EmployeeDetails',JSON.stringify(emp));
  }
 
  onDelete(){

    localStorage.removeItem('EmployeeDetails');
    
  }
  
  public checkError = (controlName: string, errorName: string) => {
    return this.employeeFormGroup.controls[controlName].hasError(errorName);
  }

}