import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ApiService } from '../api.service';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { EmailVerifiComponent } from './email-verifi/email-verifi.component';


@NgModule({
  declarations: [
    SignupComponent,
    EmailVerifiComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,FormsModule,HttpClientModule,
    AutocompleteLibModule
    
  ],
  providers:[ApiService]
})

export class SignupModule { }
  


