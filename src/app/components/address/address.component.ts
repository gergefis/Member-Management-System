import { Component, AfterViewInit, EventEmitter, Input, Output, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Address } from '../../common/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() addressLabel: string = 'Address';
  @Input() addressData: { address: string, addressType: string } | null = null;
  @Output() addressChange = new EventEmitter<any>(); 

  addressForm: FormGroup;
  
  
  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      address: '', 
      addressType: this.addressData?.addressType 
    });
  }

  ngOnInit() {
    if (this.addressData) {
      this.addressForm.patchValue(this.addressData);
    }
  }

  onAddressChange() {
    if (this.addressForm.valid) {
      this.addressChange.emit(this.addressForm.value);
    }
  }
}
