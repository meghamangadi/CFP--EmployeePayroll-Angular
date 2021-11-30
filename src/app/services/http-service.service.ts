import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private baseUrl: string = "http://localhost:8085/employeePayrollservice";

  constructor(private httpClient: HttpClient) {
    
  }

  getEmployeeData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/getAllemployees");
  }

  addEmployeeData(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/saveemployee", body);
  }

  deleteEmployeeData(id: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl+"/deleteemployeeId/"+id);
  }

  updateEmployeeData(id: number, value: any): Observable<Object> {
    return this.httpClient.put(this.baseUrl+"/updateemployeeId/"+id,value);
  }
}