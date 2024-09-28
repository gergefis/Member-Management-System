import { Component} from '@angular/core';
import { User } from '../../common/user';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users-bootstrap.component.html',
  styleUrl: './display-users.component.css'
})
export class DisplayUsersComponent {
  // getusersForm$: FormGroup;
  userDetails$: Observable <{ users: User[] }>; //

  constructor(private fb: FormBuilder, private userService: UserService) {
    
    this.userDetails$ = this.userService.getUsers()
    
  

  }

}
