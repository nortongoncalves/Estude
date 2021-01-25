import 'react-native-get-random-values';
import {v4} from 'uuid';

export interface IRequestUsers {
  name: string;
  email: string;
  avatarLink: string;
  biography: string;
}

class Users {
  public readonly id: string;

  public name: string;

  public email: string;

  public avatarLink: string;

  public biography: string;

  public createdAt: string;

  public updatedAt: string;

  constructor(
    {name, email, avatarLink, biography}: IRequestUsers,
    id?: string,
  ) {
    const dateNow = new Date().toISOString();

    this.name = name;
    this.avatarLink = avatarLink;
    this.biography = biography;
    this.email = email;

    if (!id) {
      this.id = v4();
      this.createdAt = dateNow;
      this.updatedAt = dateNow;
    }
  }
}

export default Users;
