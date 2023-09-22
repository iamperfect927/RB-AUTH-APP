import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .header-text{
      font-size: 25px;
      letter-spacing: 20px;
      margin-left: 15px;
    }
    .deco{
      color: red;
      font-size: 30px;
    }
    div{
      margin-left: auto;
      margin-right: 20px
    }
    div a{
      text-decoration: none;
      color: white;
      font-size: 15px;
      
    }
    .user-link{
      margin-left: 10px;
      
    }
  `
  ]
})
export class HeaderComponent {

  // ismenurequired = false;
  isadminuser = false;
  constructor(
    private _router: Router,
    private _service: AuthService,
  ){}

  ngDoCheck(): void {
    let currenturl = this._router.url;
    // if (currenturl=="/login" || currenturl=="/register"){
    //   this.ismenurequired = false;
    // }else {
    //   this.ismenurequired = true;
    // }

    if (this._service.GetUserRole() === 'admin'){
      this.isadminuser = true;
    }else {
      this.isadminuser = false;
    }
  }
}
