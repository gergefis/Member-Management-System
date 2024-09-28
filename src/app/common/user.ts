export class User {
 public id?: number; 
 public firstName: string;
 public lastName: string;
 public gender: Gender;
 public birthdate: Date;
 public address: Address[]


  constructor(
    id: number,
    firstName: string,
    lastName: string,
    gender: Gender,
    birthdate: Date,
    address: Address[]
  ) {
    this.id =id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthdate = birthdate;
    this.address = address;
  }
}

export enum Gender { //TODO - Ξεχωριστή κλάση?
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export enum AddressType {
  HOME = 'HOME',
  WORK = 'WORK'
}

export class Address { //TODO - Ξεχωριστή κλάση?
  address: string;
  addressType: AddressType;
  
  constructor(address: string, addressType: AddressType) {
    this.address = address;
    this.addressType = addressType;
  }
}