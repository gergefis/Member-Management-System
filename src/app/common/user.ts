export class User {
 public id?: number; // TODO
 public firstName: string;
 public lastName: string;
 public gender: Gender;
 public birthdate: Date;
 public addresses: Address[];

  constructor(
    firstName: string,
    lastName: string,
    gender: Gender,
    birthdate: Date,
    addresses: Address[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthdate = birthdate;
    this.addresses = addresses;
  }
}

export enum Gender { //TODO - Ξεχωριστή κλάση
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export class Address { //TODO - Ξεχωριστή κλάση
  address: string;
  addressType: 'WORK' | 'HOME';


  constructor(
    address: string,
    addressType: 'WORK' | 'HOME' // enum στο backend
  ) {
    this.address = address;
    this.addressType = addressType;
  }
}