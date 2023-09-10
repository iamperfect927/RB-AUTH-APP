import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


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
import { HeeaderComponent } from './components/heeader/heeader.component';









@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserListingComponent,
    UpdatePopupComponent,
    ForgotPasswordComponent,
    ConfirmDeleteComponent,
    HeeaderComponent
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule,
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
