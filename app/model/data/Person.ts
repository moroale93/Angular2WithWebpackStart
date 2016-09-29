export class Person {
  firstName: string;
  lastName: string;
  email: string;

  costructor(name:string, surname:string, mail:string){
      this.firstName=name;
      this.lastName=surname;
      this.email=mail;
  }

  get getName():string{
      return this.firstName;
  }

  get getSurname():string{
      return this.lastName;
  }

  get getEmail():string{
      return this.email;
  }
}
