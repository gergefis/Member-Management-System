import { Component, OnInit } from '@angular/core';
import { Member } from '../../member';
import { User } from '../../common/user';
import { generate } from 'rxjs';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users-bootstrap.component.html',
  styleUrls: ['./display-users.component.css']
})
export class DisplayUsersComponent implements OnInit {
  
  // users: User[]; ADD data from spring

  // create array of objects
  memberList: User[] = [
    new User("Dimitris", "Gergefis", "gender", new Date(), "workAddress", "homeAddressthis"),
    new User("John", "Doe", "test3", new Date(), "test5", "test6")
  ];

  constructor() {}

  ngOnInit(): void {
      
  }

}
