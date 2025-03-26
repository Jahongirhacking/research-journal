export interface IBaseDataRes<TData> {
  code: number;
  error: null;
  success: boolean;
  data: TData;
}

export enum Role {
  User = "user",
  Admin = "admin",
}
