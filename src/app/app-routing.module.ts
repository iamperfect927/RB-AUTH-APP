import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

  const routes: Routes = [
    { path: '/', component: HomeComponent},
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'user', component: UserListingComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent},
  ]

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
