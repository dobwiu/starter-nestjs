import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, accountId: user.accountId };
    return {
      statusCode: 200,
      message: 'Authorized',
      data: {
        userId: user.id,
        username: user.fullName,
        accountId: user.accountId,
        access_token: await this.jwtService.signAsync(payload),
      },
    };
  }
}
