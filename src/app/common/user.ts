export class User {
  id?: number;
  firstName: string;
  lastName: string;
  gender: string;
  birthdate: Date;
  workAddress?: string;
  homeAddress?: string;

  constructor(
    firstName: string,
    lastName: string,
    gender: string,
    birthdate: Date,
    workAddress?: string,
    homeAddress?: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthdate = birthdate;
    this.workAddress = workAddress || '';
    this.homeAddress = homeAddress || '';
  }
}
