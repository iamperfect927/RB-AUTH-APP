import { Component } from '@angular/core';

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

}
