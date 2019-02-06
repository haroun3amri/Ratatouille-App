export interface IUser {
  id: number;
  userName: string;
  lastName: string;
  fistName: string;
  Password: string;
  BirthDay: string;
  BirthPlace: string;
  Address: string;
  Preference: string;
  Sexe: string;
  Poids: string;
  height: string;
  goalPoids: string;
}

export class User {
  id: number;
  userName: string;
  lastName: string;
  fistName: string;
  Password: string;
  BirthDay: string;
  BirthPlace: string;
  Address: string;
  Preference: string;
  Sexe: string;
  Poids: string;
  height: string;
  goalPoids: string;



  constructor(user) {
    {
      this.id = user.id;
      this.userName = user.userName;
      this.lastName = user.lastName;
      this.fistName = user.fistName;
      this.Password = user.Password;
      this.BirthDay = user.BirthDay;
      this.BirthPlace = user.BirthPlace;
      this.Address = user.Address;
      this.Preference = user.Preference;
      this.Sexe = user.Sexe;
      this.Poids =user.Poids;
      this.height = user.height;
      this.goalPoids= user.goalPoids;
    }
  }
}
