import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  passwordss: string | undefined;
  conpasswordss: string | undefined;
  show2=false;
  show = false;
  conshow = false;
  signupform:any={}
  olduser=false;
  signups=true;
passwordnotmatch=false;
  pwd=false;
  projectlist:any
  ok=false
  projectname:any;
  data:any;
  flat=false;
  email_exist=false;
  
  constructor(private api:ApiService,private activeroute:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.passwordss = 'password';
    this.conpasswordss = 'password';
   


  }

  
  signup(form:NgForm){
    console.log(this.signupform);


    this.ok=false
    console.log("yes");
    if (this.signupform.password==this.signupform.repassword) {
      this.ok=true
      this.passwordnotmatch=false;
      localStorage.setItem("email", this.signupform.email)
      localStorage.setItem("password", this.signupform.password)
          this.signupform={}
        this.ok=false
        $('#myModal').modal("show");
        form.resetForm()

    //     this.router.navigate(['/login']);
    // this.api.signup(this.signupform).subscribe((result)=>{
    //   console.log("signup result",result);
    //   this.olduser=result.olduser;
    //  console.log(this.olduser);
    //  if(result.message =="email already exist"){
    //    this.email_exist=true;
    //  }else{
    //   this.email_exist=false;
    //   if(result.status){
       
    //     localStorage.setItem("user_token",result.token);
    //     console.log(localStorage.getItem("user_token"))
       
    //     this.signupform={}
    //     this.ok=false
    //     $('#myModal').modal("show");
    //     form.resetForm()

    //     // this.router.navigate(['/login']);
    //    }
    //    else{
    //     this.ok=false
    //      console.log(result.error);
         
    //     // alert("no")
    //    }
    //  }
  
    // })
      
    } else {
      this.ok=false
      this.passwordnotmatch=true
      console.log("already exist")
    }
   
  
  
      }
  onClick() {
    if (this.passwordss === 'password') {
      this.passwordss = 'text';
      this.show = true;
    } else {
      this.passwordss = 'password';
      this.show = false;
    }
  }
  onClickconpass(){
    if (this.conpasswordss === 'password') {
      this.conpasswordss = 'text';
      this.conshow = true;
    } else {
      this.conpasswordss = 'password';
      this.conshow = false;
    }
  }
showHeader=false


selectEvent(event:any) {
  console.log(event.flat_no);
  this.flat=false
  this.signupform.flat_no=event.flat_no
}

onChangeSearch(val: string) {

console.log("onChangeSearch");

  
}

onFocused(event:any){
console.log("onFocused");
this.flat=false;
  
}
keyword='flat_no'
upload(event:any){
  this.projectname = event.target.value;
  console.log(this.projectname);
  this.api.get_flat_details_signup({project_name:this.projectname}).subscribe((result)=>{
    console.log(result);
    this.data=result.data
    console.log(this.data);
    this.signupform.flat_no="";
  })
}


numericOnly(event:any): boolean {    
  let patt = /^([0-9])$/;
  let result = patt.test(event.key);
  return result;
}
}
 