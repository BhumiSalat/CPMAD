import { Component } from '@angular/core';
import { ApiServiceService } from '../Employee/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  apiData : any;
  constructor(private apiService : ApiServiceService) {}

  ngOnInit() {
    this.apiService.getAll() 
    .subscribe(
      data => {
        this.apiData = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
