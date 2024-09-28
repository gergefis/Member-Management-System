
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { AddressType } from '../../common/user';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent{

  isSubmitted: boolean = true;
  registerForm$: FormGroup;

  userDetails: any;
  errorMessage: string | null = null; 

  constructor(private fb: FormBuilder, private userService: UserService) {
     //provide the controls
      this.registerForm$ = this.fb.group({  
        firstName: ['', Validators.required], 
        lastName: ['', Validators.required],  
        gender: ['', Validators.required], 
        birthdate: ['', Validators.required], 
       
        addresses: this.fb.array([
        this.createAddress('',AddressType.WORK),
        this.createAddress('',AddressType.HOME)
        ])
      });
    }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registerForm$.get(fieldName);
    return !!(field?.invalid && (field.dirty ||
      field.touched || this.isSubmitted));
  }

  createAddress(inputAddress: string, type: AddressType  ): FormGroup { // 'HOME' | 'WORK'
    return this.fb.group({
      address: [inputAddress],
      addressType: [type]
    });
  }

  registerUser() {

    if (this.registerForm$.valid) {
      console.log('Register Form Value: ', this.registerForm$.value);

      this.errorMessage = null;  

      this.userService.addUser(this.registerForm$.value).subscribe( 
      (response) => {
        alert('User '+ response.firstName + ' ' + response.lastName + ' added successfully');
        this.registerForm$.reset();
      },
      (err) => {
        console.error('Error when adding user:', err);

        if (err.error && err.error.message) {
          this.errorMessage = err.error.message; // Αποθηκεύστε το μήνυμα λάθους
          alert(this.errorMessage);
        } else {
          this.errorMessage = 'An unknown error occurred';
        }
         
        }
      );
    }
  }

    get lastName() {
      return this.registerForm$.get('lastName');
    }
    get birthdate() {
      return this.registerForm$.get('birthdate');
    }
    get gender() {
      return this.registerForm$.get('gender');
    }
    get addresses(): FormArray {
      return this.registerForm$.get('addresses') as FormArray;
    }
  }