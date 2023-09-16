import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup } from '@angular/forms';

import { Router } from '@angular/router';

//SERVICES
import { AuthService } from 'src/app/service/auth.service';
import { CoreService } from 'src/app/core/core.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePopupComponent } from '../update-popup/update-popup.component';
import { UpdateRoleComponent } from '../update-role/update-role.component';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styles: [`
    .main-body{
      width: 90%;
      justify-content: center;
      margin: 0 auto;
      border-radius: 30px solid blue;
    }
  `
  ]
})
export class UserListingComponent implements OnInit {
  userlist: any;
  filter: any = FormGroup<any>;
  dataSource: any;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'username', 'phone', 'gender', 'email', 'dob', 'role', 'status', 'action'];


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

  constructor(
    private _service: AuthService,
    private _router: Router,
    private _coreService: CoreService,
    private _dialog: MatDialog
  ) {
    this.loadUser();
  }

  ngOnInit(): void {

  }

  loadUser() {
    this._service.GetAll().subscribe({
      next: (res: any) => {
        this.userlist = res;
        this.dataSource = new MatTableDataSource(this.userlist);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
  updateUser(data: any) { 
    this._dialog.open(UpdatePopupComponent, {
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      width: '30%',
      // data:{
      //   userdata: id
      // }
      data: data
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage;
    }
  }

}
