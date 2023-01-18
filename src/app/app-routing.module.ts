import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guards';
import { LayoutComponent } from "./layout/layout.component";
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';

import { EmailVerifiComponent } from './signup/email-verifi/email-verifi.component';
import { SignupModule } from './signup/signup.module';

const routes: Routes = [
    {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(x => x.LoginModule),
    data: { showHeader: false,}
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then(x => x.SignupModule),
    data: { showHeader: false,}
  },
  { path: "", redirectTo: "login", pathMatch: "full" },
  // { path: "", component: AuthLayoutComponent, children: sessionRoutes },
 

  { path: "emailverifi/:token", component: EmailVerifiComponent,  loadChildren: () => import('./signup/signup.module').then(x => x.SignupModule)  },

  { path: "resetpassword/:id/:token", component: ResetPasswordComponent,  loadChildren: () => import('./login/login.module').then(x => x.LoginModule)  },

 
  { path: "employees", component: LayoutComponent,  loadChildren: () => import('./employees/employees.module').then(x => x.EmployeesModule),  canActivate:[AuthGuard]  },
  { path: "companyinfo", component: LayoutComponent,  loadChildren: () => import('./companyinfo/companyinfo.module').then(x => x.CompanyinfoModule),  canActivate:[AuthGuard]  },
  
  

  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
