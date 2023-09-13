import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck  {

  ismenurequired = false
  constructor(
    private _router: Router,
  ){}

  ngDoCheck(): void {
    let currenturl = this._router.url;
    if (currenturl=="/login" || currenturl=="/register"){
      this.ismenurequired = false;
    }else {
      this.ismenurequired = true;
    }
  }
  
}
