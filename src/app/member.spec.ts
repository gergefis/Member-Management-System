// Unit test specifications
import { Member } from './member';

describe('Member', () => {
  it('should create an instance', () => {
    const firstName = 'John';
    const lastName = 'Doe';
    const gender = 'M';
    const birthdate = new Date('1990-01-01');
    const workAddress = '123 Work St.';
    const homeAddress = '456 Home St.';


describe('Member', () => {
  it('should create an instance', () => {
    expect(new Member(firstName, lastName, gender, new Date(), workAddress, homeAddress)).toBeTruthy();
  });
});
  })
});