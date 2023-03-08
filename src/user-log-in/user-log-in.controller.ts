/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UserLogInService } from './user-log-in.service';
import { CreateUserLogInDto } from './dto/create-user-log-in.dto';
import { UpdateUserLogInDto } from './dto/update-user-log-in.dto';
import { AuthService } from 'src/auth/auth.service';
import { UserSignUp } from 'src/user-sig-up/user-signUp.schema';
@Controller('user-log-in')
export class UserLogInController {
  constructor(private readonly userLogInService: UserLogInService) { }

  // @UseGuards(AuthGuard('local'))
  @Post()
  create(@Body() createUserLogInDto: CreateUserLogInDto) {
    const user = this.userLogInService.create(createUserLogInDto);
    return {
      message: "you are sucessfully login",
      data: { user }
    }
  }

  @Get()
  findAll() {
    return this.userLogInService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userLogInService.findone(id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserLogInDto: UpdateUserLogInDto) {
    return this.userLogInService.update(+id, updateUserLogInDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLogInService.remove(+id);
  }
}
