export class User {
  id: string;
  companyId: string;
  fullName: string;
  email: string;
  password: string;
  level: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date;
  passwordExpired: boolean;
}
