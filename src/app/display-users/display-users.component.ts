import { Component, OnInit } from '@angular/core';
import { Member } from './member';
import { generate } from 'rxjs';

@Component({
  selector: 'app-display-users',
  templateUrl: './display-users-bootstrap.component.html',
  styleUrl: './display-users.component.css'
})
export class DisplayUsersComponent implements OnInit {

  // create array of objects
  memberList: Member[] = [
    new Member("Dimitris", "Gergefis", "gender", "date", "workAddress", "homeAddressthis"),
    new Member("John", "Doe", "test3", "test4", "test5", "test6")
  ];

  constructor() {}

  ngOnInit(): void {
      
  }

  title = 'Display Users';
  firstName = 'Dimitris';
  lastName ='Gergefis';
}
