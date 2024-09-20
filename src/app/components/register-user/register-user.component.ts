import { Component } from '@angular/core';
import { UserService } from '../../services/user.service'; 
import { User } from '../../common/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
  user: User;

  selectedDate: Date | null = null; //For DatePicker
  
  constructor(private userService: UserService) {
    this.user = new User('', '', '', new Date(), '', '');
   }

   // save AddressComponent
  onWorkAddressChange(newAddress: string) {
    this.user.workAddress = newAddress;
  }
   
  onHomeAddressChange(newAddress: string) {
    this.user.homeAddress = newAddress;
  }
  
  onSubmit() {
    this.userService.addUser(this.user).subscribe({
      next: (response) => {
        console.log('User added successfully', response);
      },
      error: (error/*: any*/) => {
        console.error('There was an error!', error);
      }
    });
  }
}
