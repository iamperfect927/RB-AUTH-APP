import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//SERVICES
import { AuthService } from 'src/app/service/auth.service';
import { CoreService } from 'src/app/core/core.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .head{
    width: 40%;
    border: 2px solid blue;
    border-radius: 10px;
    margin: 120px auto;
  }
  .card{
    
  }
  .input{
    display: block;
  }
  .register-btns{
    margin-top: 20px;
  }
`
  ]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  userdata: any;
  result: any;

  constructor(
    private _builder: FormBuilder,
    private _service: AuthService,
    private _router: Router,
    private coreService: CoreService,
    private http: HttpClient,
  ) {
    sessionStorage.clear();
    // localStorage.clear();
    
  }

  ngOnInit(): void {
    this.loginForm = this._builder.group({
      id: new FormControl('1'),
      phone: new FormControl('652768274'),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required]),
    });

    
  }

  proceedLogin() {

    // LOGIN VALIDATION, SETSESSION STORAGE AND REDIRECTION TO HOME PAGE

    if (this.loginForm.valid) {
      this._service.GetAll().subscribe({
        next: (res: any) => {
          const user = res.find((a: any) => {
            return (a.username === this.loginForm.value.username && a.password === this.loginForm.value.password);
          });
          // CHECKING THE IF IT'S THE USER
          if (user) {
            // CHECKING IF USER IS ACTIVE
            if (user.isActive){
              // console.log(user.username, user.role);
              sessionStorage.setItem('username', (user.username));
              sessionStorage.setItem('userrole', user.role); 
              this._router.navigate(['']);
              this.loginForm.reset();
            } else {
              this.coreService.openSnackBar('Inactive user please contact support', 'error');
              this.loginForm.reset();
            }
          } else {
            this.coreService.openSnackBar('incorrect username or password', 'error');
            this.loginForm.reset();
          }
        },
        error: (err: any) => {
          console.log(err);
          this.coreService.openSnackBar('invalid creedentials', 'error');
        }
      })
    } else {
      console.log('login form is not valid');
    }


    // HELPED ME SOLVE MY GET REQUEST PROBLEM
    // this.http.get<any>('http://localhost:3000/user').subscribe({
    //   next: (res: any) => {
    //     const user = res.find((a:any) => {
    //       return a.username === this.loginForm.value.username && a.password === this.loginForm.value.password;
    //     })

    //     if (user){
    //       console.log('match');
    //       this._router.navigate(['']);
    //     }else{
    //       console.log('no match');
    //       location.reload();
    //     }
    //   },
    //   error: (err: any) => {
    //     console.log(err);
    //   },
    // })
  }

}
