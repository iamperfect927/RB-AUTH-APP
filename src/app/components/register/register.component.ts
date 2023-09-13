import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//SERVICES
import { AuthService } from 'src/app/service/auth.service';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [`
    .head{
      width: 40%;
      border: 2px solid blue;
      border-radius: 10px;
      margin: 40px auto;
    }
    .card{
      
    }
    .input{
      display: block;
    }
    .register-btns{
      margin-top: 20px;
    }
  `]
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  // date picker
  startDate = new Date(2000, 0, 1);

  constructor(
    private _builder: FormBuilder,
    // private _toastr: ToastrService,
    private _service: AuthService,
    private _router: Router,
    private coreService: CoreService,
  ) {

  }

  ngOnInit(): void {
    this.registerForm = this._builder.group({
      // id: new FormControl('', [Validators.required, Validators.minLength(5)]),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      role: new FormControl(''),
      isActive: new FormControl(false),
      password: new FormControl('', [Validators.required]),

    });
  }

  proceedRegister() {
    // Check if the register form is valid
    if (this.registerForm.valid) {
      // Log the value of the form to the console
      console.log(this.registerForm.value)
      // Call the ProceedRegister() method of the _service service
      this._service.ProceedRegister(this.registerForm.value).subscribe({
        // Handle the success case
        next: (val: any) => {
          this.coreService.openSnackBar('account created please contact admin to grant access at (+237 652768274)', 'done');
          this._router.navigate(['login']);
        },
        // Handle the error case
        error: (err: any) => {
          console.error(err);
          this.coreService.openSnackBar('an error occurred', 'error');
        }
      });
    } else {
      // The form is not valid, so display an error message
      this.coreService.openSnackBar('please enter all fields correctly', 'ok');
    }
  }
}
