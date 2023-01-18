import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import {  Component,ChangeDetectorRef  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SearchFilterPipe } from '../search-filter.pipe';
import { HttpClient } from "@angular/common/http";


declare var $: any;

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
  
})
export class EmployeesComponent{
  projectlist:any
  employees:any
  one_employees:any={}
  getemployees:any
    remove_id: any;
    search_v:any
    term:any
    public SearchText: any = '';
    public searchFilter: any = '';
  designation:any = [{}];
  countrylist:any = [{}];
    getemployees_value:any=[];
    viewemployees:any=[];
    getemployeesadd_value:any=[];

    addenquire=false;
    title = 'datatables';
  dtOptions: DataTables.Settings = {};
  addErr:any;
    constructor(private http: HttpClient,private api:ApiService,private route:Router,private activerouter:ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) { }
  
    ngOnInit(): void {
  
  // this.api.gets_projectlist().subscribe((result)=>{
  //   console.log("kkkkkkkkkkkkkkkkkkkkkkkk",result);
    
  // })
    // console.log( new Date().valueOf());
    

    this.designation =
      [
        {"name":"Manger"}, 
        {"name":"HR"} , 
        {"name":"Team leader"} , 
        {"name":"Developer"} ,    
         
      ]
      
     
        const url ='https://jsonplaceholder.typicode.com/todos'
        this.http.get(url).subscribe((res)=>{
          this.getemployees = res
          console.log(this.getemployees)
        })
      

      // if(localStorage.getItem("user_type")=="customer"){
      //   this.addenquire=true;
      //   this.api.get_employees().subscribe((result)=>{
          
      //     if(result.status){
      //       // this.getemployees=result.data;
      //       // this.getemployeesadd_value = result.data2;          
              
      //       this.getemployees = result.data;
      //       console.log("wwwwwwww",this.getemployees);
      //     }
          
      //   }) 
      // }
      // else{
      //   this.addenquire=false;
      //   this.api.admin_get_all_employees().subscribe((result)=>{
      //     console.log(result);
      //     if(result.status){
      //       this.getemployees=result.data;
      //     }
          
      //   })
      // }
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 3,
        processing: true,
        dom: 'Bfrtip',
          
      }
     
    }

    search(e:any){
         this.search_v=e.target.value;
         console.log(this.search_v);
         
    }
    // myFunction(e:any){
    //   // console.log("ddddddddddd",e);
  
    //   for (const x of this.getemployees) {
        
    //   //  console.log( x.name.match(e));
       
    //     if(x.name.match(e)){
  
    //       console.log("ssssssssss",x.name);
    //       this.getemployees_value.push(x)
    //       console.log("get",this.getemployees_value);
    //     }
    //   }
  
    //   // this.myform.flat_no=""
    //   // this.flat_autocompletes=true;
    //   // this.flat_inputs=false;
    //   // console.log(this.myform.project_name);
    //   // this.api.get_flat_details_signup({project_name:this.myform.project_name}).subscribe((result)=>{
    //   //   console.log(result);
    //   //   this.data=result.data
    //   //   console.log(this.data);
    //   // })
    // }
    cancel(form:NgForm){
      this.employees={
        Country_code:"+91",
        Country:"india"
      }
     
    }
  getemployeesdata()
  {
    this.api.get_employees().subscribe((result)=>{
      this.addErr = '' ;
      if(result.status){
        // this.getemployees=result.data;
        // this.getemployeesadd_value = result.data2;          
          
        this.getemployees = result.data;
        console.log("wwwwwwww",this.getemployees);
      }
      else
      {
        this.addErr = "No Data found";
      }
      
    }) 
  }
    addemployees(form:NgForm){
        console.log("eeeeeeeeeee",this.employees);
        this.api.add_employees(this.employees).subscribe((result)=>{
          console.log(result);
          if(result.status){
            // form.reset();
            $('#myModal').modal("hide");
           this.ngOnInit();
          }
          else
          {
            $('#myModal').modal("hide");
            this.addErr = "Not Inserted";
          }
        })
    }
  
    edit(emp_id:any){
      console.log(emp_id);
      this.api.get_one_employees({emp_id:emp_id}).subscribe((result)=>{
        console.log("result edit..........", result)
        let arr1 = result.data;          
            let arr2 = result.data2;
            this.one_employees = Object.assign(arr1, arr2);          
          
        console.log("edit............", this.one_employees)
  
        
      })
    }
  
    view(emp_id:any){
      console.log(emp_id);
      this.api.get_one_employees({emp_id:emp_id}).subscribe((result)=>{
        let arr1 = result.data;          
        let arr2 = result.data2;          
        this.one_employees = Object.assign(arr1, arr2);  
        this.one_employees.country1 = this.one_employees.country;
        this.one_employees.designation = this.one_employees.designation1;
        console.log("edit............", this.employees)
  
        
      })
    }
  update(){
    console.log(this.one_employees);
    this.api.update_employees(this.one_employees).subscribe((result)=>{
      console.log(result);
      if(result.status){
        $('#myModal1').modal("hide");
       this.ngOnInit();
      }
    })
  }
  
  remove(id:any){
    console.log("ddddddd",id)
    this.remove_id=id;
  }
  
  delete(){
    this.api.delete_employees({emp_id:this.remove_id}).subscribe((result)=>{
      console.log(result);
      if(result.status){
        $('#myModal2').modal("hide");
       this.ngOnInit();
      }
    })
  }
  
  numericOnly(event:any): boolean {    
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }
  characterOnly(event:any): boolean {    
    let patt =  /^[a-zA-Z]+$/;
    let result = patt.test(event.key);
    return result;
  }
  
  }