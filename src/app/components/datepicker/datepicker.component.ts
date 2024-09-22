import { Component,ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';


/** @title Datepicker start date */
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  // // standalone: true,/
  providers: [provideNativeDateAdapter()]
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatepickerComponent {
  readonly startDate = new Date(1990, 0, 1);

  // @Input() formControl!: FormControl;

  // birthdate: Date

  @Input() birthdate: Date | null = null;
  @Output() birthdateChange = new EventEmitter<Date | null>();
  // @Output() submitted:  boolean = false;

  // selectedDate: Date;
  
  onDateChange(event: MatDatepickerInputEvent<Date>) {
    this.birthdate = event.value;
    this.birthdateChange.emit(this.birthdate); 
  }
}







// @Component({
//   selector: 'app-datepicker',
//   templateUrl: './datepicker.component.html'
// })
// export class DatepickerComponent {

//   @Input() birthdate: Date | null = null; // Το πεδίο που δέχεται την τιμή από το γονικό component
//   @Output() birthdateChange = new EventEmitter<Date>();

//   // selectedDate: Date | null = null; // Ημερομηνία που επιλέγει ο χρήστης
//   // bsConfig: Partial<BsDatepickerConfig>; // Configuration για το Bootstrap Datepicker

//   constructor() {
//     // Ρύθμιση για το format "dd/MM/yyyy"
//     // this.bsConfig = {
//     //   dateInputFormat: 'DD/MM/YYYY', // Εδώ αλλάζεις το format της ημερομηνίας BootstrapDatePicker
//     // };
//   }


//   onDateChange(event: any) {
//     this.birthdate = event.value; // Αποθήκευση της επιλεγμένης ημερομηνίας
//     console.log(this.birthdate);  // Εμφάνιση της ημερομηνίας στο console
//   }
// }
