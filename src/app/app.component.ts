import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck  {

  ismenurequired = false;
  isadminuser = false;
  constructor(
    private _router: Router,
    private _service: AuthService,
  ){}

  ngDoCheck(): void {
    let currenturl = this._router.url;
    if (currenturl=="/login" || currenturl=="/register"){
      this.ismenurequired = false;
    }else {
      this.ismenurequired = true;
    }

    if (this._service.GetUserRole() === 'admin'){
      this.isadminuser = true;
    }else {
      this.isadminuser = false;
    }
  }
  
}
