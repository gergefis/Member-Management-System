import { Component} from '@angular/core';
import { User } from '../../common/user';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users-bootstrap.component.html',
  styleUrl: './display-users.component.css'
})
export class DisplayUsersComponent {
  userDetails$: Observable <User[]>;

  constructor(private userService: UserService) {
    this.userDetails$ = this.userService.getUsers();
  }

}
