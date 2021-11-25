import { variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
 
  constructor() { }
   
  ngOnInit(): void {
    this.getEmployeeData();
  }
  empData:any={};
   employeList=[];
 getEmployeeData(){
  var empDatass=JSON.parse(localStorage.getItem('EmployeeDetails'));   
  this.empData=empDatass;
  
 }
 onDelete(id){
   console.log(id);  
    let result:any=this.empData.slice(id);
    localStorage.setItem('EmployeeDetails',JSON.stringify(result));
    this.getEmployeeData();
 }
 
 
  
   
}