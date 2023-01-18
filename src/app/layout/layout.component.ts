import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  showElement = true;
  user_type:any
  name:any
  project_name:any
  flat_no:any
  user_id:any

  adminshow:any
  profileshow:any
 
  constructor(private router:Router) {
    this.showElement = true;
    setTimeout(() => {
      // console.log('hide');
      this.showElement = false;
    }, 1000);
   }

  ngOnInit(): void {
    this.user_type=localStorage.getItem("user_type")
    this.name=localStorage.getItem("name")
    this.project_name=localStorage.getItem("project_name")
    this.flat_no=localStorage.getItem("flat_no")
    this.user_id=localStorage.getItem("user_id")

    if(this.user_type=="admin"){
      this.adminshow=true;
      this.profileshow=false;
    }else{
      this.adminshow=false;
      this.profileshow=true;
    }
  
  }
  

  logout(){
    localStorage.clear();
    $('#exampleModal').modal("hide");
    this.router.navigateByUrl('/login')
  }
  toggleNav() {   
		let div: any = document.querySelector('.content');
    console.log(div.classList.contains('sidebar-show'))
    if(div.classList.contains('sidebar-show')) {     
      $('#main').addClass('sidebar-hide');
      $('#main').removeClass('sidebar-show');
      $('#slide-out').addClass('slide-in');
      $('#slide-out').removeClass('slide-out');
      $(".navbar").css("width","100%")
      $("#sidebar").css("left","-255px")
    }
    else {     
      $('#main').addClass('sidebar-show');
      $('#main').removeClass('sidebar-hide');
      $('#slide-out').addClass('slide-out');
      $('#slide-out').removeClass('slide-in');
      $(".navbar").css("width","89%")
      $("#sidebar").css("left","0px")
    }
  
  }
 
}
