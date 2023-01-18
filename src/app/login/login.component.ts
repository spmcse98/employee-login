import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  passwordss: string | undefined;
  signinform:any={}
  forgotpassword:any={}
  show = false;
  signins=true;
  aftersubmit=false;
  status=false
  activenot=false
  loadbu=true;
  load=false;
  email_invalid=false;
  password_invalid=false;
  active_account=false;
  constructor(private api:ApiService,private activeroute:ActivatedRoute,private router:Router) { 
    
  }

  ngOnInit() {
    this.passwordss = 'password';
    
  }
  onClick() {
    
  }
  signin(){
    console.log(this.signinform);
    //let result = JSON.parse(JSON.stringify(localStorage.getItem('login'))) 
    
   // let result = localStorage.getItem('login') 
   
       let result = {
                    email : localStorage.getItem('email'),
                    password: localStorage.getItem('password'),
                    message:"",
                    }
                    console.log("login........", result);
                    if(this.signinform.email === result.email && this.signinform.password === result.password)
                    {
                      console.log("signin result..............",result);
                      this.router.navigate(['/employees']);
                    }
                    else if(this.signinform.email != result.email)
                    {
                      console.log("signin result2..............",result);
                      result.message = "Incorrect Username"
                      this.email_invalid=true;
                    }
                    else if(this.signinform.password != result.password)
                    {
                      console.log("signin result3..............",result);
                      result.message = "Incorrect Password"
                      this.password_invalid=true;
                    }
                    else if(this.signinform.email != result.email && this.signinform.password != result.password)
                    {
                      console.log("signin result4..............",result);
                      result.message = "Incorrect Credential"
                      this.password_invalid=true;
                      this.email_invalid=true;

                    }
    // this.api.signin(this.signinform).subscribe((result)=>{
    //   console.log("signin result",result);
    //   // this.status=result.status
    //   if(result.message == "email invalid"){
    //     this.email_invalid=true;
    //   }else{
    //     this.email_invalid=false;
    //   }
    //   if(result.message == "password invalid"){
    //     this.password_invalid=true;
    //   }else{
    //     this.password_invalid=false;
    //   }
    //   if(result.message == "not active"){
    //     this.active_account=true;
    //   }else{
    //     this.active_account=false;
    //   }

    //   if(result.status){
    //    this.status=false;
    //    localStorage.setItem("user_id",result.data._id);
    //     localStorage.setItem("user_token",result.token);
    //     localStorage.setItem("user_type",result.user_type);
    //     localStorage.setItem("name",result.data.name)
    //     localStorage.setItem("project_name",result.data.project_name)
    //     localStorage.setItem("flat_no",result.data.flat_no);
    //     console.log("get tokan in signin ts",localStorage.getItem("user_token"));
    //       this.router.navigate(['/employees']);

    //    }
    //    else{
        
    //     if (result.activenot) {
    //       this.activenot=true;
    //       this.status=false
    //     } else {
    //       this.status=true;
    //     }
       
    //      console.log(result.error);
         
       
    //    }
      
    // })
    
    }
    forgotrequest(){
      // this.bu=false;
      // this.dots=true
      this.loadbu=false;
      this.load=true;
      console.log('123123',this.forgotpassword);
    this.api.forgot_request(this.forgotpassword).subscribe((result)=>{
      console.log('my result',result)
      if (result.status) {
        $('#myModal').modal("hide");
        this.aftersubmit=true
        this.signins=false
    //     this.show=true
    // this.logins=false
      } else {
        this.aftersubmit=false
        this.signins=true
      }
    
    })
    }
    
    gologin(){
      // this.show=false
      // this.logins=true
    }
    reset(form:NgForm){
      
      $('#myModal').modal("show");
      form.reset()
    }
showHeader=false
}


