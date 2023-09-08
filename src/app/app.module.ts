import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

//COMPONENTS
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { UpdatePopupComponent } from './components/update-popup/update-popup.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';

//MATERIAL MODULE
import { MaterialModule } from 'src/material-module';









@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserListingComponent,
    UpdatePopupComponent,
    ForgotPasswordComponent,
    ConfirmDeleteComponent
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
