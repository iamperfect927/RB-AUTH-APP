import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

//SERVICES
import { AuthService } from 'src/app/service/auth.service';
import { CoreService } from 'src/app/core/core.service';

@Component({
  selector: 'app-update-popup',
  templateUrl: './update-popup.component.html',
  styles: [
  ]
})
export class UpdatePopupComponent {

  constructor(
    private _service: AuthService,
    private _router: Router,
    private coreService: CoreService,
  ){}
}
