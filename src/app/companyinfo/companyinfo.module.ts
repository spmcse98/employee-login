import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import{HttpClientModule} from '@angular/common/http'

import { CompanyinfoRoutingModule } from './companyinfo-routing.module';
import { CompanyinfoComponent } from './companyinfo.component';

@NgModule({
  declarations: [CompanyinfoComponent],
  imports: [
    CommonModule,
    CompanyinfoRoutingModule
  ]
})
export class CompanyinfoModule { }
