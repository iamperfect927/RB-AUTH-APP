import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Inject, Injectable, inject } from '@angular/core';

//SERVICES
import { AuthService } from 'src/app/service/auth.service';
import { CoreService } from 'src/app/core/core.service';


// Injectable()
export const authGuard: CanActivateFn = (route, state) => {
  const coreService = inject(CoreService);
  const router = inject(Router);
  const service = inject(AuthService);
      if (service.IsLoggedIn()) {
        return true;
      } else {
        router.navigate(['login']);
        coreService.openSnackBar('access denied', 'error');
        console.log('error');
        return false;
      }
};


