import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
  private readonly accounts = [
    {
      id: 9249189,
      marketPlace: 'MLB',
      nickName: 'Store D',
      externalUserId: 112233,
      refreshToken: 'RT-112233',
      accessToken: 'TK-112233',
      expiresIn: new Date(),
      permaLink: 'https://',
      marketPlaceStatus: 'active',
      tinyToken: null,
      isActive: true,
      createdAt: new Date(),
      updatedAt: Date.now,
      aliquota: 6.75,
    },
    {
      id: 90002328,
      marketPlace: 'MLB',
      nickName: 'Store 3D',
      externalUserId: 333333,
      refreshToken: 'RT-333333',
      accessToken: 'TK-333333',
      expiresIn: new Date(),
      permaLink: 'https://',
      marketPlaceStatus: 'active',
      tinyToken: 'TT-1234',
      isActive: true,
      createdAt: new Date(),
      updatedAt: Date.now,
      aliquota: 11.0,
    },
  ];

  findAll() {
    return this.accounts;
  }

  findOne(accountId: number) {
    return this.accounts.find((account) => account.id === accountId);
  }
}
