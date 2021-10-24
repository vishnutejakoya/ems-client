import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-add-update-employee',
  templateUrl: './add-update-employee.component.html',
  styleUrls: ['./add-update-employee.component.scss']
})
export class AddUpdateEmployeeComponent implements OnInit {

  @Output() employeeCreated = new EventEmitter<any>();
  @Input() employee: Employee;

  constructor() {
    this.employee = {
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
    };
    this.clearEmployee();
  }

  ngOnInit() {
  }

  // Create an empty note object
  private clearEmployee() {
    this.employee = {
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
    };
  };

  public addUpdateEmployee(event: any) {
    this.employeeCreated.emit(this.employee);
    this.clearEmployee();
  };

}
