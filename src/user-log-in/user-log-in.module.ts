/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserLogInService } from './user-log-in.service';
import { UserLogInController } from './user-log-in.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserLogIn, UserLogInSchema } from './user-login.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserLogIn.name, schema: UserLogInSchema },
    ]),
  ],
  controllers: [UserLogInController,],
  providers: [UserLogInService],
  exports: [UserLogInService]
})
export class UserLogInModule { }
