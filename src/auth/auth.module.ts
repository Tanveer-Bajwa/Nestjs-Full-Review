/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AuthSchema } from './schemas/auth.schema';
import * as dotenv from 'dotenv';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Auth", schema: AuthSchema }]),
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => {
        dotenv.config()
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOption: {
            expireIn: config.get<string | number>('JWT_EXPIRE')
          }
        }
      },
      inject: [ConfigService],

    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [JwtStrategy, PassportModule]
})
export class AuthModule { }