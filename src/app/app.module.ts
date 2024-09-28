import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleMapsModule } from '@angular/google-maps';
import { AddressComponent } from './components/address/address.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { UserListComponent } from './components/user-list/user-list.component';
import { MatNativeDateModule } from '@angular/material/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    NavBarComponent,
    HeaderComponent,
    AddressComponent,
    DatepickerComponent,
    UserListComponent,
    DisplayUsersComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    HttpClientModule,
    MatFormFieldModule,  
    MatInputModule,
    AppRoutingModule,
    GoogleMapsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule
],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }
