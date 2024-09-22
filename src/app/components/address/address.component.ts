import { Component, AfterViewInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Address } from '../../common/user';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent { //implements AfterViewInit 

  @Input() addressLabel: string = 'Address'; // Εισαγωγή για το label της διεύθυνσης
  @Output() addressChange: EventEmitter<Address> = new EventEmitter<Address>();

  address: string = '';
  addressType:'WORK' | 'HOME' = 'WORK';

  
  @ViewChild('addressInput', { static: false }) addressInput!: ElementRef;


  // ngAfterViewInit(): void {
  //   const input = this.addressInput.nativeElement as HTMLInputElement;
  //   const autocomplete = new google.maps.places.Autocomplete(input);
  
  //   autocomplete.addListener('place_changed', () => {
  //     const place = autocomplete.getPlace();
  //     if (place.formatted_address) {
  //       this.address = place.formatted_address;
  
  //       // Εδώ πρέπει να ορίσεις το addressType, π.χ. από επιλογή χρήστη ή default
  //       const newAddress = new Address(this.address, this.addressType); // Βεβαιώσου ότι η addressType είναι σωστά ορισμένη
  //       this.addressChange.emit(newAddress);
        
  //       console.log('Selected address:', newAddress);
  //     }
  //   });
  // }
  
  onAddressInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.address = input.value;
    this.addressChange.emit(new Address(this.address, this.addressType)); // Χρησιμοποιώντας Address
  }
}
