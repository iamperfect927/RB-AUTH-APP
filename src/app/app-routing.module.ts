import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { authGuard } from './guard/auth.guard';

  const routes: Routes = [
    // AUTH GUARD CHECKS SESSION STORAGE TO SEE IF A USER IS LOGGED IN OR NOT(REDIRECTS BACK TO THE LOGIN PAGE) , canActivate:[authGuard]
    { path: '', component: HomeComponent, canActivate:[authGuard]},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'user', component: UserListingComponent, canActivate:[authGuard]},
    { path: 'forgot-password', component: ForgotPasswordComponent},
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
