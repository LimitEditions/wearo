import { UserRoleType } from "../UserRoleType";

export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRoleType;
}
