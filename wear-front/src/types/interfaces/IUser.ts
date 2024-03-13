import { UserRole } from "../UserRole";

export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}
