import { Component, OnInit } from '@angular/core';
import { Employee} from './employee.model';
import { ApiServiceService } from '../Employee/api-service.service';
import { EmployeeDetailPageModule } from './employee-detail/employee-detail.module';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})
export class EmployeePage implements OnInit {

  employee : Employee[];
  constructor(private employeeService: ApiServiceService) { }


  ngOnInit() {
    this.employee = this.employeeService.getAllEmployees();
  }
  ionViewWillEnter(){
    this.employee = this.employeeService.getAllEmployees();
  }

}
