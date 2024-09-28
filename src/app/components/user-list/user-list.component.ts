import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../common/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {
 

  userDetails: any;  
  user: any;
  userId: any; 
  errorMessage: string | null = null; 

  errors: any = [];


  constructor(
    private userService: UserService, 
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit() {

    const userIdIstring = this.route.snapshot.paramMap.get('id');
    if (userIdIstring) {
      this.userId = Number(userIdIstring);

      this.userService.getUserById(this.userId).subscribe(
        (resp) => {
          this.userDetails = resp;

        const workAddress = this.userDetails.addresses.find((addr: any) => addr.addressType === 'WORK');
        const homeAddress = this.userDetails.addresses.find((addr: any) => addr.addressType === 'HOME');

        this.userDetails.workAddress = workAddress ? workAddress.address : 'N/A';
        this.userDetails.homeAddress = homeAddress ? homeAddress.address : 'N/A';
        },
        (error) => {
          console.error("Error fetching user details:", error);
        }
      );
    }}

  updateUser(){}

deleteUser(event: any, userId: number){
    
    if(confirm('Are you sure, you want to delete user ' + 
                this.userDetails.firstName + ' ' + this.userDetails.lastName +' ?')){
      
      event.target.innetText = "Deleting...";
      this.userService.deleteUser(userId).subscribe((response) => {
        alert((response as { message: string }).message);
        this.router.navigate(['/display-users']); 
      },
      (err) => {
        console.error('Error when adding user:', err);

        if (err.error && err.error.message) {
          this.errorMessage = err.error.message;
          alert(this.errorMessage);
        } else {
          this.errorMessage = 'An unknown error occurred';
        }
         
        }

    );

      

    }
  }



}
