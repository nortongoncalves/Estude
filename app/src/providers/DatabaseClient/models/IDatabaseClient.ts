export interface IPropsCreate {
  collection: string;
  data: any;
}

export default interface IDatabaseClient {
  create: (props: IPropsCreate) => Promise<string>;
}
