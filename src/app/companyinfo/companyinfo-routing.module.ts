import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyinfoComponent } from '../companyinfo/companyinfo.component';

const routes: Routes = [
  { path: '', component: CompanyinfoComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyinfoRoutingModule { }
