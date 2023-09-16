import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  apiurl = 'http://localhost:3000/user';

  GetAll(){
    return this._http.get(this.apiurl);
  }

  UpdateEmployee(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/user/${id}`, data);
 }

  GetAllRole(){
    return this._http.get('http://localhost:3000/role');
  }

  ProceedRegister(inputdata: any): Observable<any>{
    return this._http.post(this.apiurl, inputdata);
  }

  UpdateUser(code: any, inputdata: any){
    return this._http.put(this.apiurl + '/' + code, inputdata);
  }

  // MOVED TO GUARD PAGE
  // IsLoggedIn(){
  //   return sessionStorage.getItem("username") != null;
  // }

  GetUserRole(){
    return sessionStorage.getItem("userrole") != null ? sessionStorage.getItem('userrole')?.toString() : '';
  }
}
