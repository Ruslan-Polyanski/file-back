import { Controller, UseGuards, Request, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAccessAuthGuard } from './guards/jwt-access-auth.guard';
import { JwtRefreshAuthGuard } from './guards/jwt-refresh-auth.guard';

type TResponseLogin = {
  id: string;
  email: string;
  accessToken: string;
  refreshToken: string;
};

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req): TResponseLogin {
    return this.authService.login(req.user);
  }

  @Post('refresh')
  @UseGuards(JwtRefreshAuthGuard)
  refresh(@Request() req) {
    return this.authService.refresh(req.user);
  }

  @Get('profile')
  @UseGuards(JwtAccessAuthGuard)
  getProfile(@Request() req) {
    return req.user;
  }
}
