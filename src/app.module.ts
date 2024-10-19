import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfessionModule } from './profession/profession.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, ProfessionModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
