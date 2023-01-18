import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerifiComponent } from './email-verifi/email-verifi.component';
import { SignupComponent } from './signup.component';

const routes: Routes = [
  { path: '', component:  SignupComponent},
  {path:"email-verifi",component:EmailVerifiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
