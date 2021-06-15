export default interface IUser {
  id: number;
  uuid: string;
  name: string;
  email: string;
  active: boolean;
  phone: number;
  document: string;
  enable_url: boolean;
  created_at: Date;
  updated_at: Date;
}

export { IUser };
