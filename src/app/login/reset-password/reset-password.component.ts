import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
declare var $: any;

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  parms:any;
  token:any;
  id:any;
forgotpassword:any={};

forgotemail:any={};

resetreq=false;
reset=true;
afterresetlink=false;
passwordnotmatch=false;
passwordss:any;
show=false;
conpasswordss:any;
conshow=false;
  constructor(private api:ApiService,private activeroute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.passwordss="password"
    this.resetreq=false;
    this.conpasswordss="password"
    this.reset=true
    this.parms=this.activeroute.snapshot.params;
    console.log("id",this.parms);
    this.token=this.parms.token;
    console.log(this.parms.id);
    
    
this.forgotpassword.id=this.parms.id
    console.log("ttttttttt",this.token);
this.api.validate_forgot_request({ temp_token: this.token }).subscribe((result)=>{
  console.log(result);
  if(result.status){
    this.resetreq=false
    this.reset=true
  }else{
    this.resetreq=true
    this.reset=false
  }

  })

}
forgot_password(){
  console.log(this.forgotpassword);
  if(this.forgotpassword.password==this.forgotpassword.repassword){
    this.api.reset_password(this.forgotpassword).subscribe((result)=>{
      console.log(result);
      if(result.status){
       
        $('#myModal1').modal("show");
        setTimeout(() => {
          $('#myModal1').modal("hide");
          this.router.navigate(['/login']);
        }, 1000);
         
        this.resetreq=false
      }
      else{
        this.resetreq=true
        this.reset=false
      }
    
      })
  }
  else{
    this.passwordnotmatch=true
  }

}

forgotrequest(){
  // this.bu=false;
  // this.dots=true
  console.log('123123',this.forgotemail);
this.api.forgot_request(this.forgotemail).subscribe((result)=>{
  console.log('my result',result)
  if (result.status) {
    alert("123");
    $('#myModal').modal("hide");
    this.afterresetlink=true;
    this.resetreq=false;
//     this.show=true
// this.logins=false
  } else {
    this.afterresetlink=false;
    this.resetreq=true;
  }

})
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

}
