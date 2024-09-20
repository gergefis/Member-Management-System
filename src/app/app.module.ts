import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { AddressComponent } from './components/address/address.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayUsersComponent,
    RegisterUserComponent,
    HeaderComponent,
    NavBarComponent,
    DatepickerComponent,
    AddressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    GoogleMapsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
