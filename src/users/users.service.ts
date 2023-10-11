import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

//export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: '04E4B7FC',
      accountId: 9249189,
      fullName: 'User N',
      email: 'n@test.org',
      password: '1234',
      level: 1,
      isActive: true,
      createdAt: new Date('2023-08-02 13:42:24.1153562'),
      updatedAt: null,
      passwordExpired: false,
    },
    {
      id: 'F7F31F21',
      accountId: 90002328,
      fullName: 'User A',
      email: 'a@test.org',
      password: '1111',
      level: 1,
      isActive: true,
      createdAt: new Date('2022-04-04 17:01:05.9600000'),
      updatedAt: null,
      passwordExpired: false,
    },
    {
      id: 'C581B49E',
      accountId: 90002328,
      fullName: 'User I',
      email: 'I@test.org',
      password: '1234',
      level: 2,
      isActive: true,
      createdAt: new Date('2022-09-05 10:14:48.9684400'),
      updatedAt: new Date('2022-09-05 11:15:16.6711858'),
      passwordExpired: false,
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.email === username);
  }
}
