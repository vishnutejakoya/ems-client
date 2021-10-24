import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.scss']
})
export class EmployeeListingComponent implements OnInit {
  @Input() employees: Array<Employee>;
  @Output() recordDeleted = new EventEmitter<any>();
  @Output() newClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();

  constructor() {
    this.employees = [];
  }
  public delete(data: Employee) {
    this.recordDeleted.emit(data);
  }

  public edit(data: Employee) {
    this.editClicked.emit(Object.assign({}, data));
  }

  public new() {
    this.newClicked.emit();
  }

  ngOnInit() {

  }
}
