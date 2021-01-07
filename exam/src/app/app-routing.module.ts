import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 
  {
    path: 'employee',
    children:[
      {
        path:'',
        loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
        
      },
      {
        path:':employeeId',
        loadChildren: () => import('./employee/employee-detail/employee-detail.module').then( 
          m => m.EmployeeDetailPageModule)
      }
    ]
   
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
