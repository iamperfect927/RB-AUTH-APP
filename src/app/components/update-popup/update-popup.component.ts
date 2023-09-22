import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

//SERVICES
import { AuthService } from 'src/app/service/auth.service';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styles: [`
    .update-popup{
      margin: 30px;
    }
    .popup-actions{
      margin-left: auto;
      width: 50%;
      
    }
  `]
})
export class UpdatePopupComponent implements OnInit {
  updateForm!: FormGroup;

  constructor(
    private _service: AuthService,
    private _router: Router,
    private _coreService: CoreService,
    private _dialogRef: MatDialogRef<UpdatePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _builder: FormBuilder,
  ) { 

    this.updateForm = this._builder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      username: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      gender: new FormControl(''),
      role: new FormControl('', Validators.required),
      isActive: new FormControl('false'),
      password: new FormControl(''),

    });

    this.loaduserdata();
  }

  rolelist: any;
  // editdata: any;

  ngOnInit(): void {
    this._service.GetAllRole().subscribe({
      next: (res: any) => {
        this.rolelist = res;
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    this.updateForm.patchValue(this.data);
    console.log(this.data)
  }

  onCancel() {
    this._dialogRef.close();
    console.log('works');
  }

  loaduserdata() {
    if (this.data){
      this.updateForm.setValue({
        firstName: this.data.firstName,
        lastName: this.data.lastName,
        username: this.data.username,
        phone: this.data.phone,
        email: this.data.email,
        dob: this.data.dob,
        gender: this.data.gender,
        role: this.data.role, 
        isActive: this.data.isActive,
        password: this.data.password
      });
    }
  }

  updateUser() {
    console.log('lol');
    if (this.updateForm.valid){
      this._service.UpdateEmployee(this.data.id,this.updateForm.value).subscribe({
      next: (res: any) => {
        console.log(res, 'updated')
        location.reload();
      },
      error: (err: any) => {
        console.log(err);
      }
    })
    }
    
    
  }
}
