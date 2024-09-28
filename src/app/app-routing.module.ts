import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUsersComponent } from './components/display-users/display-users.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UserListComponent } from './components/user-list/user-list.component';

const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' }, 
    { path: 'display-users', component: DisplayUsersComponent },
    { path: 'register-user', component: RegisterUserComponent },
    { path: 'user-list/:id', component: UserListComponent },
    { path: '**', redirectTo: 'display-users', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
