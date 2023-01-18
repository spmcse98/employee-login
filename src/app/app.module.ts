import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RouterModule } from '@angular/router';
import { ApiService } from './api.service';
import { AuthGuard } from './guards/auth.guards';
import { FormsModule } from '@angular/forms';
import { MaxLengthDirective } from './max-length.directive';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
//import { CompanyinfoComponent } from './companyinfo/companyinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    MaxLengthDirective,
    //CompanyinfoComponent,

   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RouterModule.forRoot([]),
    HttpClientModule,FormsModule,
    AutocompleteLibModule

    
  ],
  providers: [ApiService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
