import { Component, AfterViewInit, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements AfterViewInit {

  @Input() addressLabel: string = 'Address'; // Εισαγωγή για το label της διεύθυνσης
  @Output() addressChange: EventEmitter<string> = new EventEmitter<string>();

  address: string = '';

  @ViewChild('addressInput', { static: false }) addressInput!: ElementRef;


  ngAfterViewInit(): void {
    const input = this.addressInput.nativeElement as HTMLInputElement;
    const autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.formatted_address) {
        this.address = place.formatted_address;
        this.addressChange.emit(this.address);
        console.log('Selected address:', this.address);
      }
    });
  }
  
  onAddressInput(event: any) {
    this.address = event.target.value;
    this.addressChange.emit(this.address);
  }
}
