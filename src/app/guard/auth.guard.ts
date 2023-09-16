import { CanActivateFn, Router } from '@angular/router';
import { Inject } from '@angular/core';

//SERVICES
// import { AuthService } from 'src/app/service/auth.service';
import { CoreService } from 'src/app/core/core.service';

 function IsLoggedIn(){
  return sessionStorage.getItem("username") != null;
  // console.log('lol')
}

export const authGuard: CanActivateFn = (route, state) => {
  const coreService = Inject(CoreService);
  const router = Inject(Router);
      if (IsLoggedIn()) {
        return true;
      } else {
        // router.navigate(['login']);
        // coreService.openSnackBar('access denied', 'error');
        console.log('error');
        return false;
      }
};


