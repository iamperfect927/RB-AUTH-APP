import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { Router } from '@angular/router';

//SERVICES
import { AuthService } from 'src/app/service/auth.service';
import { CoreService } from 'src/app/core/core.service';



export class AuthGuard implements CanActivate{

  constructor(
    public _service: AuthService,
    public _router: Router,
    public coreService: CoreService,
  ){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (this._service.IsLoggedIn()) {
        return true;
      } else {
        this._router.navigate(['login']);
        return false;
      } 
    }
}

// export const authGuard: CanActivateFn = (route, state) => {
//   return true
  

// };


