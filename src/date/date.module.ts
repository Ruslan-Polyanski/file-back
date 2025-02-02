import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DateEntity } from './date.entity';
import { DateController } from './date.controller';
import { DateService } from './date.service';
import { UserEntity } from 'src/user/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DateEntity, UserEntity])],
  controllers: [DateController],
  providers: [DateService],
})
export class DateModule {}
