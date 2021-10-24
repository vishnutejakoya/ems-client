import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private headers: HttpHeaders;

  private url: string = 'http://localhost:59061/api/EmployeeAPI/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  public getAllEmployees() {
    var url = `${this.url}GetAllEmployees`;
    return this.http.get(url, { headers: this.headers });
  }

  public getEmployeeById(id: number) {
    var url = `${this.url}GetEmployeeById?id=${id}`;
    return this.http.get(url, { headers: this.headers });
  }

  public getEmployeeByUserName(userName: string) {
    var url =  `${this.url}GetEmployeeByUserName?userName=${userName}`;
    return this.http.get(url, { headers: this.headers });
  }

  public createEmployee(payload: Employee) {
    var url = `${this.url}InsertEmployee`;
    return this.http.post(url, payload, { headers: this.headers });
  }
  
  public deleteEmployee(payload: Employee) {
    var url = `${this.url}DeleteEmployee?id=${payload.id}`;
    return this.http.get(url, { headers: this.headers });
  }

  public updateEmployee(payload: Employee) {
    var url = `${this.url}UpdateEmployee`;
    return this.http.post(url, payload, { headers: this.headers });
  }

}
