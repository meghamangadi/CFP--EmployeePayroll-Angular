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

 /*  constructor(private formBuilder: FormBuilder) { 
    this.employeeFormGroup = this.formBuilder.group({
      empName: new FormControl('', [ Validators.required, Validators.pattern("^[A-Z][a-zA-z\\s]{2,}$")]),
      profilePic: new FormControl('', Validators.required),
      empGender: new FormControl('', Validators.required),
      department: this.formBuilder.array([], Validators.required),    
      note: new FormControl('', Validators.required),
    })
  } */
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
    //this.employee=Object.assign(this.employee,this.employeeFormGroup);
    localStorage.setItem('EmployeeDetails',JSON.stringify(this.employeeFormGroup.value));
  }
  
  public checkError = (controlName: string, errorName: string) => {
    return this.employeeFormGroup.controls[controlName].hasError(errorName);
  }

}