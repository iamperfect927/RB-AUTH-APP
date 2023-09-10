import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

//SERVICES
// import { ToastrService } from "ngx-toastr"
import { AuthService } from 'src/app/service/auth.service';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
  .card{
    width: 40%;
    border: 2px solid blue;
    border-radius: 10px;
    margin: auto;
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
  ) {
    // sessionStorage.clear();
  }

  ngOnInit(): void {
    this.loginForm = this._builder.group({
      username: new FormControl('admin', Validators.required),
      password: new FormControl('', [Validators.required]),
    });    
  }

  proceedLogin(){
    if (this.loginForm.valid) {
      this._service.GetbyCode(this.loginForm.value.username).subscribe({
        next: (res: any) => {
          this.userdata = res;
          console.log(this.userdata);
        },
        error: (err: any) => {
          console.log(err);
        }
      })
    }
  }

  // proceedLogin() {
  //   if (this.loginForm.valid) {
  //     this._service.GetbyCode(this.loginForm.value.id).subscribe(item => {
  //       this.result = item;
  //       if (this.result.password === this.loginForm.value.password) {
  //         if (this.result.isactive) {
  //           sessionStorage.setItem('username',this.result.id);
  //           sessionStorage.setItem('role',this.result.role);
  //           this._router.navigate(['']);
  //         } else {
  //           this.coreService.openSnackBar('inactive user, please contact admin', 'ok');
  //         }
  //       } else {
  //         this.coreService.openSnackBar('invalid creedentials', 'error');
  //       }
  //     });
  //   } else {
  //     this.coreService.openSnackBar('please enter valid data', 'error');
  //   }
  // }
}
