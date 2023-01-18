import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import{HttpClientModule} from '@angular/common/http'

import { DataTablesModule } from "angular-datatables";


import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';



@NgModule({
  declarations: [EmployeesComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    FormsModule,DataTablesModule
  ],
  providers:[ApiService,HttpClientModule]
})
export class EmployeesModule { }
