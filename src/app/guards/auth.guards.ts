import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( public router: Router) {}
  canActivate(): boolean {
     if (localStorage.getItem("email")) {
       console.log("work");
       
    return true;
 }
    else{
        localStorage.clear();
        this.router.navigate(['/login'])
        return false;
    }
    
  }
}

