
export class Member {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public gender: string,
    public birthdate: Date, // Date,
    public workAddress: string,
    public homeAddress: string)  {

  }
}
