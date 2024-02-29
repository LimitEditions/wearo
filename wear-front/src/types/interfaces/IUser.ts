import { UserRole } from "../UserRole.ts";

export interface User {
  id: number;
  username: string;
  email: string;
  role: UserRole;
}
