import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { importType } from '@angular/compiler/src/output/output_ast';
import { Employee} from './employee.model';

const apiData : any = "http://jsonplaceholder.typicode.com/posts";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private employee: Employee[] =[
    {
      id: 'emp1',
      name: 'Bhumi',
      adress: 'Surat'

    },
    {
      id: 'emp2',
      name: 'Khushi',
      adress: 'Surat'

    },
    {
      id: 'emp3',
      name: 'Viral',
      adress: 'Mahuva'

    },
    {
      id: 'emp4',
      name: 'Utsav',
      adress: 'Surat'

    }


  ]

  constructor(private http : HttpClient) { }

  getAll()
  {
    return this.http.get(apiData);
  }

  getAllEmployees(){
    return [...this.employee];
  }

  getEMployee(employeeId: String){
    return {
      ...this.employee.find(emp =>{
        return emp.id === employeeId;
      }),
    };
  }

  deleteEmployee(employeeId: String){
    this.employee = this.employee.filter(emp =>{
    return emp.id !== employeeId;
    })
  }

}

