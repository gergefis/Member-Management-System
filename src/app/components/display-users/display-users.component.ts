import { Component, OnInit } from '@angular/core';
import { User } from '../../common/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users-bootstrap.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {

  users: User[] = [];  //ADD data from spring

  constructor(private userService: UserService) {
    this.getUsersDetails()
  }
  
  getUsersDetails() {
    this.userService.getUsers.subscribe(
      (resp) => {
        console.log(resp);
        this.studentDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }



  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

}
