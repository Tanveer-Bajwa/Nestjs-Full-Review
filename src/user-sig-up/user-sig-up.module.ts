/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserSigUpService } from './user-sig-up.service';
import { UserSigUpController } from './user-sig-up.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSignUp, UserSignUpSchema } from './user-signUp.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserSignUp.name, schema: UserSignUpSchema },
    ]),
  ],
  controllers: [UserSigUpController],
  providers: [UserSigUpService],
  exports: [UserSigUpService],
})
export class UserSigUpModule { }
