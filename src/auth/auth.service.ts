import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
// import { v4 as uuidv4 } from 'uuid';
import * as argon2 from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/types/types';
import refreshJwtConfig from './config/refresh-jwt.config';
import { ConfigType } from '@nestjs/config';
import accessJwtConfig from './config/access-jwt.config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    @Inject(accessJwtConfig.KEY)
    private accessTokenConfig: ConfigType<typeof accessJwtConfig>,
    @Inject(refreshJwtConfig.KEY)
    private refreshTokenConfig: ConfigType<typeof refreshJwtConfig>,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOne(email);
    if (!user) throw new UnauthorizedException('email is not correct');

    const passwordMatch = await argon2.verify(user.password, password);
    if (!passwordMatch)
      throw new UnauthorizedException('password is not correct');

    return user;
  }

  login(user: IUser) {
    const { id, email } = user;

    const { accessToken, refreshToken } = this.generateTokens(user);

    return {
      id,
      email,
      accessToken,
      refreshToken,
    };
  }

  refresh(user: IUser) {
    const { accessToken, refreshToken } = this.generateTokens(user);

    return { accessToken, refreshToken };
  }

  generateTokens(user: IUser) {
    const { id, email } = user;

    const accessToken = this.jwtService.sign(
      {
        id,
        email,
      },
      this.accessTokenConfig.signOptions,
    );

    const refreshToken = this.jwtService.sign(
      {
        id,
        email,
      },
      this.refreshTokenConfig,
    );

    return { accessToken, refreshToken };
  }
}
