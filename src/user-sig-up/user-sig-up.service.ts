/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserSigUpDto } from './dto/create-user-sig-up.dto';
import { UpdateUserSigUpDto } from './dto/update-user-sig-up.dto';
import { UserSignUp, UserSignUpDocument } from './user-signUp.schema';

@Injectable()
export class UserSigUpService {

  constructor(
    @InjectModel(UserSignUp.name)
    private readonly userModel: Model<UserSignUpDocument>,
  ) { }

  create(createUserSigUpDto: CreateUserSigUpDto): Promise<UserSignUp> {
    const create = new this.userModel(createUserSigUpDto);
    return create.save();
  }

  findAll() {
    return this.userModel.find().exec();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  async findByName(username: string) {
    const user = await this.userModel.findOne({ username: username })
    return user;

  }

  update(id: string, updateUserSigUpDto: UpdateUserSigUpDto) {
    return this.userModel.findByIdAndUpdate({ id, updateUserSigUpDto });
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
