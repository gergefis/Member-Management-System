// BEGIN - Reactive Forms
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User, Address, Gender } from '../../common/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit{
  // @Input()  birthdateChange;
  // @Output() bithdate;

  isSubmitted: boolean = false;

  registerForm = this.fb.group({  //provide our controls
    firstName: ['', Validators.required], 
    lastName: ['', Validators.required],  
    gender: ['', Validators.required], 
    birthdate: [null, Validators.required], // to θέλω Date
    // addresses: this.fb.array([ // I use FormArray for addresses
    workAddress: this.fb.group({
      address: [''],
      addressType: ['WORK'] // Προεπιλογή τύπου
    }),
      homeAddress: this.fb.group({
        address: [''],
        addressType: ['HOME']
      })
      // this.createAddress('WORK'),
      // this.createAddress('HOME')
    // ])

    // workAddress: ['', 'WORK'],
    // homeAddress: ['', 'HOME']
      // [
      //   new Address('', 'WORK'),
      //   new Address('', 'HOME')
      // ]
  }); 

  constructor(private fb: FormBuilder) {}

  isFieldInvalid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return !!(field?.invalid && (field.dirty ||
      field.touched || this.isSubmitted));
  }

  ngOnInit(): void{}

  createAddress(type: 'WORK' | 'HOME'): FormGroup {
    return this.fb.group({
      address: [''],
      addressType: [type]
    });
  }

  // get addresses(): FormArray {
  //   return this.registerForm.get('addresses') as FormArray;
  // }

  onWorkAddressChange(newAddress: Address) {
    const workAddressControl = this.registerForm.get('workAddress');  // as FormGroup
    if (workAddressControl) {
      workAddressControl.patchValue({
        address: newAddress.address,
        addressType: newAddress.addressType
    });
  }
}

  onHomeAddressChange(newAddress: Address) {
    const homeAddressControl = this.registerForm.get('homeAddress');
    if (homeAddressControl) {
      homeAddressControl.patchValue({
        address: newAddress.address, 
        addressType: newAddress.addressType
      });
    }
  }

  onSubmit() {
        console.log(
          'User added successfully', 
          this.registerForm.value, 
          this.registerForm.invalid
        );
        this.isSubmitted = true;
    }
  }

// END no-standalone




// BEGIN - standalone component

// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../services/user.service'; 
// import { User, Address, Gender} from '../../common/user';

// import {ChangeDetectionStrategy} from '@angular/core';
// import { NgForm } from '@angular/forms'; 
// import {MatSelectModule} from '@angular/material/select';
// import {MatInputModule} from '@angular/material/input';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { FormsModule } from '@angular/forms';
// import { MatButtonModule } from '@angular/material/button';
// import { CommonModule } from '@angular/common';
// import { NavBarComponent } from '../nav-bar/nav-bar.component';
// import { DatepickerComponent } from '../datepicker/datepicker.component';
// import { MatNativeDateModule } from '@angular/material/core';

// @Component({
//   selector: 'app-register-user',
//   templateUrl: './register-user.component.html',
//   styleUrl: './register-user.component.css',
//   standalone: true,
//   imports: [
//     NavBarComponent,
//     DatepickerComponent,
//     MatFormFieldModule,  // Σωστή εισαγωγή του Angular Material module
//     MatInputModule,
//     MatSelectModule,
//     MatButtonModule,
//     MatNativeDateModule,
//     FormsModule,
//     NavBarComponent,
//     CommonModule,
//     MatDatepickerModule
//   ],
// })
// export class RegisterUserComponent implements OnInit {
//   user: User;
//   Gender = Gender;
//   // Address = Address;
//   submitted : boolean = false; 

//   // birthdate: Date  //For DatePicker
  
//   constructor(private userService: UserService) {
//     this.user = new User(
//       '', //firstName
//       '', //lastName
//       null as unknown as Gender, // default gender // Gender.MALE
//       new Date(), // null,  //null as unknown as Date, // //TODO
//       [
//         new Address('', 'WORK'), 
//         new Address('', 'HOME')  
//       ]
//     );
//   }
  
//   ngOnInit() {}

//   onSubmit(userForm: NgForm) {
//     this.submitted = true; // Ο χρήστης υπέβαλε τη φόρμα
//     if (userForm.valid) {
//       this.userService.addUser(this.user).subscribe({
//         next: (response: any) => {
//           console.log('User added successfully', response);
//         },
//         error: (error: any) => {
//           console.error('There was an error!', error);
//         }
//       });
//     }
//   }

//     // save AddressComponent
//     onWorkAddressChange(newAddress: any) {
//       const workAddress = this.user.addresses.find(addr => addr.addressType === 'WORK');
//     if (workAddress) {
//       workAddress.address = newAddress;
//     }
//   }
     
//     onHomeAddressChange(newAddress: any) {
//       const homeAddress = this.user.addresses.find(addr => addr.addressType === 'HOME');
//       if (homeAddress) {
//         homeAddress.address = newAddress;
//       }
    
//     }

//   }
