import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-email-verifi',
  templateUrl: './email-verifi.component.html',
  styleUrls: ['./email-verifi.component.css']
})
export class EmailVerifiComponent implements OnInit {

msg:any;
  token:any;
  already=false;
  constructor(private router:Router,private activeroute:ActivatedRoute,private api:ApiService) { }
  show=false;
  ngOnInit(): void {
    this.token=this.activeroute.snapshot.params;
    console.log("id",this.token);
    this.token=this.token.token;
    console.log("ttttttttt",this.token);
this.api.verifi_email({ temp_token: this.token }).subscribe((result)=>{
  console.log("rrrrrrrrrrrrrr",result);
 this.msg=result.message
  if (result.status) {
    this.show=true
  } else {
    this.show=false
    this.already=result.alreadyemailverifi
  }
})
  }
  gologin(){
    this.router.navigateByUrl('/login')
  }

}
