import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
    // {path: '', component: AppComponent },
    {path: 'display-users', component: DisplayUsersComponent},
    {path: 'registrer-user', component: RegisterUserComponent},
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
