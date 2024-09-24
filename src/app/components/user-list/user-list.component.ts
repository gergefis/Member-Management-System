import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../common/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
  // @Input() userDetails$: number;

  userDetails: any; // Observable<User[]>;  
  user: any;
  userId: any; //Observable<User[]>;
  selectedUser$: Observable<User> | undefined;

  errors: any = [];

  constructor(private userService: UserService, private route: ActivatedRoute) {
    // this.userDetails$ = this.userService.getUsers();
   
  }
  
  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    alert(this.userId);
      this.userService.getUserById(this.userId).subscribe((resp: any) => {
        console.log(resp);
        this.userDetails = resp;
        console.log("userDetails" + this.userDetails);
        
      });
  }

  // getUserDetails(id: number) {
  //   console.log('Fetching details for user ID:', id);
  //   this.selectedUser$ = this.userService.getUserById(id).subscribe;
  // }

  updateUser(){}

}
