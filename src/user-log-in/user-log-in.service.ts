/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserSignUp, UserSignUpDocument } from 'src/user-sig-up/user-signUp.schema';
import { CreateUserLogInDto } from './dto/create-user-log-in.dto';
import { UpdateUserLogInDto } from './dto/update-user-log-in.dto';
import { UserLogIn } from './entities/user-log-in.entity';
import { UserLogInDocument } from './user-login.schema';

@Injectable()
export class UserLogInService {
  constructor(
    @InjectModel(UserLogIn.name)
    private readonly userModel: Model<UserSignUpDocument>,
  ) { }
  async create(createUserLogInDto: CreateUserLogInDto) {
    const user: UserLogInDocument = await this.userModel.findOne(createUserLogInDto)
    return user;
  }

  findAll() {
    return this.userModel.find();
  }

  findUser(password: object) {
    return this.userModel.findOne({ password: password });
  }

  update(id: number, updateUserLogInDto: UpdateUserLogInDto) {
    return `This action updates a #${id} userLogIn`;
  }

  remove(id: number) {
    return `This action removes a #${id} userLogIn`;
  }
}
