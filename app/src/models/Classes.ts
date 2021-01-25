import 'react-native-get-random-values';
import {v4} from 'uuid';

export interface IRequestClasses {
  matterId: string;
  cost: number;
  userId: string;
}

class Classes {
  public readonly id: string;

  public cost: number;

  public userId: string;

  public matterId: string;

  public createdAt: string;

  public updatedAt: string;

  constructor(props: IRequestClasses, id?: string) {
    const dateNow = new Date().toISOString();

    Object.assign(this, props);

    if (!id) {
      this.id = v4();
      this.createdAt = dateNow;
      this.updatedAt = dateNow;
    }
  }
}

export default Classes;
