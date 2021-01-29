export interface IPropsCreate {
  collection: string;
  data: any;
}

export interface IPropsFindAll {
  collection: string;
}

export default interface IDatabaseClient {
  create: (props: IPropsCreate) => Promise<string>;
  findAll: <T>(props: IPropsFindAll) => Promise<T[]>;
}
