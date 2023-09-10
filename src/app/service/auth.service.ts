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

  GetbyCode(code: any){
    return this._http.get(this.apiurl + '/' + code);
  }

  ProceedRegister(inputdata: any): Observable<any>{
    return this._http.post(this.apiurl, inputdata);
  }

  UpdateUser(code: any, inputdata: any){
    return this._http.put(this.apiurl + '/' + code, inputdata);
  }
}
