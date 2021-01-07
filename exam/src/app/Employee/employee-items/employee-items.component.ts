import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-items',
  templateUrl: './employee-items.component.html',
  styleUrls: ['./employee-items.component.scss'],
})
export class EmployeeItemsComponent implements OnInit {

  @Input() employeeItem : Employee;
  constructor() { }

  ngOnInit() {}

}
