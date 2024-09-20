import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'display-users', component: DisplayUsersComponent },
    { path: 'register-user', component: RegisterUserComponent },
    { path: '**', redirectTo: '/display-users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
