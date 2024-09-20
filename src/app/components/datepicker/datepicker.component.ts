import { Component } from '@angular/core';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';



@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent {
  selectedDate: Date | null = null; // Ημερομηνία που επιλέγει ο χρήστης
  bsConfig: Partial<BsDatepickerConfig>; // Configuration για το Datepicker

  constructor() {
    // Ρύθμιση για το format "dd/MM/yyyy"
    this.bsConfig = {
      dateInputFormat: 'DD/MM/YYYY', // Εδώ αλλάζεις το format της ημερομηνίας
    };
  }


  onDateChange(event: any) {
    this.selectedDate = event.value; // Αποθήκευση της επιλεγμένης ημερομηνίας
    console.log(this.selectedDate);  // Εμφάνιση της ημερομηνίας στο console
  }
}
