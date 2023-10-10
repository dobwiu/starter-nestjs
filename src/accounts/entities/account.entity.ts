export class Account {
  id: string;
  companyId: string;
  marketPlace: string;
  nickName: string;
  externalUserId: number;
  refreshToken: string;
  accessToken: string;
  expiresIn: Date;
  permaLink?: string;
  marketPlaceStatus: string;
  tinyToken?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt?: Date;
  aliquota?: number;
}
