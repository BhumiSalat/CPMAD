import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api-service.service';
import { Employee } from '../employee.model';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.page.html',
  styleUrls: ['./employee-detail.page.scss'],
})
export class EmployeeDetailPage implements OnInit {

  loadedEmployee: Employee;
  constructor(private activatedRoute: ActivatedRoute, 
    private ApiServiceService: ApiServiceService,
    private router: Router,
    private alertctr: ActionSheetController) {

   }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if(!paraMap.has('employeeId')){
        this.router.navigate(['employee']);
        return;
      }
      const employeeId = paraMap.get('employeeId');
      this.loadedEmployee = this.ApiServiceService.getEMployee(employeeId);

      if(!this.loadedEmployee.id){
        this.router.navigate(['employee']);
      }
    });
  }
  async onDeleteClick(){

    const alert = await this.alertctr.create({
      header: 'Are you sure?',
     
      buttons:[
        {
          text:'Cancel',
          role:'cancel'
        },
        {
          text:'Delete',
          role:'destructive',
          handler:() =>{
            this.ApiServiceService.deleteEmployee(this.loadedEmployee.id);
            this.router.navigate(['employee']);
          } 
        } 
      ]
    });
    await alert.present();
  }

}
