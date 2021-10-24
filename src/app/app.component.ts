import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { EmployeeService } from './employee.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public employees: Array<Employee>;
  public currentEmployee: any;

  title = 'Employee Maintenance Application';

  constructor(private employeeService: EmployeeService) {
    this.employees = [];
    employeeService.getAllEmployees().subscribe((data: any) => this.employees = data);
    this.currentEmployee = this.getDefaultEmployee() ;
  }

  private getDefaultEmployee() {
    return {
      id: undefined,
      firstName: '',
      middleName: '',
      lastName: '',
      userName: '',
      password: '',
      dateOfBirth: undefined,
      dateOfJoining: undefined,
      mobileNumber: '',
      email: '',
      address: ''
    }
  }

  ngOnInit(): void {

  }

  public createUpdateEmployee(employee: Employee) {
    let employeeWithId = _.find(this.employees, ((el: Employee) => el.id === employee.id));
    if (employeeWithId) {
      const updateIndex = _.findIndex(this.employees, { id: employeeWithId.id });
      this.employeeService.updateEmployee(employee).subscribe(
        result => this.employeeService.getAllEmployees().subscribe((data: any) => this.employees = data)
      );
    } else {
      this.employeeService.createEmployee(employee).subscribe(
        (employeeRecord: any) => {
          this.employeeService.getAllEmployees().subscribe((data: any) => this.employees = data);
        }
      );
    }

    this.currentEmployee = this.getDefaultEmployee();
  };

  public editEmployee(record: Employee) {
    this.currentEmployee = record;
  };

  public newEmployee() {
    this.currentEmployee = this.getDefaultEmployee();
  };

  public deleteEmployee(record: Employee) {
    const deleteIndex = _.findIndex(this.employees, { id: record.id });
    this.employeeService.deleteEmployee(record).subscribe(
      result => this.employees.splice(deleteIndex, 1)
    );
  }

}
