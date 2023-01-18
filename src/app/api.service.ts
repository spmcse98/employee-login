import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map, tap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}
  apiurl: any = 'http://localhost:4000';

  admin_signup(x: any) {
    return this.http.post<any>(this.apiurl + '/auth/admin/signup', x);
  }

  adminsignin(x: any) {
    return this.http.post<any>(this.apiurl + '/auth/admin/login', x);
  }
  // admin_verifi_email(x: any) {
  //   return this.http.post<any>(this.apiurl + '/auth/admin/admin_verifi', x);
  // }

  signup(x: any) {
    return this.http.post<any>(this.apiurl + '/auth/user/signup', x);
  }
  signin(x: any) {
    return this.http.post<any>(this.apiurl + '/auth/user/signin', x);
  }
  verifi_email(x: any) {
    return this.http.post<any>(this.apiurl + '/auth/user/active', x);
  }

  get_customer_details(x: any) {
    return this.http.post<any>(
      this.apiurl + '/auth/user/getcustomerdetails',
      x
    );
  }

  admin_get_all_employees() {
    return this.http.get<any>(this.apiurl + '/auth/admin/admingetallemployees');
  }

  get_all_customer_details() {
    return this.http.get<any>(this.apiurl + '/auth/user/getallcustomerdetails');
  }

  update_password(x: any) {
    return this.http.post<any>(this.apiurl + '/auth/user/updatepassword', x);
  }

  update_customer_details(x: any) {
    return this.http.post<any>(
      this.apiurl + '/auth/user/updatecustomerdetails',
      x
    );
  }

  delete_customer_details(x: any) {
    return this.http.post<any>(
      this.apiurl + '/auth/user/deletecustomerdetails',
      x
    );
  }

  get_projectlist_signup() {
    return this.http.get<any>(this.apiurl + '/auth/user/getprojectlistsignup');
  }

  get_flat_details_signup(x: any) {
    return this.http.post<any>(
      this.apiurl + '/auth/user/getflatdetailsignup',
      x
    );
  }

  forgot_request(x: any) {
    return this.http.post<any>(this.apiurl + '/auth/user/forgotrequest', x);
  }

  validate_forgot_request(x: any) {
    return this.http.post<any>(
      this.apiurl + '/auth/user/validateforgotrequest',
      x
    );
  }

  reset_password(x: any) {
    return this.http.post<any>(this.apiurl + '/auth/user/resetpassword', x);
  }

  get_user_details() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.get<any>(
      this.apiurl + '/user/getuserdetails',
      httpOptions
    );
  }

  add_flat_details(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/addflatdetails',
      x,
      httpOptions
    );
  }

  get_flat_details() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.get<any>(
      this.apiurl + '/user/getflatdetails',
      httpOptions
    );
  }

  get_one_flat_details(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/getoneflatdetails',
      x,
      httpOptions
    );
  }
  update_flat_details(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/updateflatdetails',
      x,
      httpOptions
    );
  }

  delete_flat_details(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/deleteflatdetails',
      x,
      httpOptions
    );
  }

  add_projectlist(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/addprojectlist',
      x,
      httpOptions
    );
  }
  get_projectlist() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.get<any>(
      this.apiurl + '/user/getprojectlist',
      httpOptions
    );
  }
  get_one_projectlist(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/getoneprojectlist',
      x,
      httpOptions
    );
  }
  update_projectlist(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/updateprojectlist',
      x,
      httpOptions
    );
  }
  delete_projectlist(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/deleteprojectlist',
      x,
      httpOptions
    );
  }

  add_employees(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/addemployees',
      x,
      httpOptions
    );
  }
  get_employees() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.get<any>(this.apiurl + '/user/getemployees', httpOptions);
  }
  get_one_employees(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/getoneemployees',
      x,
      httpOptions
    );
  }
  update_employees(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/updateemployees',
      x,
      httpOptions
    );
  }
  delete_employees(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/deleteemployees',
      x,
      httpOptions
    );
  }

  add_support(x: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('user_token'),
      }),
    };
    return this.http.post<any>(
      this.apiurl + '/user/addsupport',
      x,
      httpOptions
    );
  }

  // newsob:any
  value: any;
  // newsob$=new Observable(sub=>{

  //   sub.next(()=>{

  //     this.value=this.http.get<any>(this.apiurl+'/auth/user/getprojectlistsignup');
  //     console.log(this.value);

  //   }

  //   );

  // })

  // gets_projectlist():Observable<any>{

  //  return this.http.get<any>(this.apiurl+'/auth/user/getprojectlistsignup').pipe(
  //    tap(data=>{
  //      for (const x of data.data) {
  //       if (x.project_name="queenstown") {
  //         console.log("qqqqqqqqqqqqqqqqqq",x);

  //       }
  //      }

  //    })
  //  )
  // }
}
