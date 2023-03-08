/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { UserSigUpService } from './user-sig-up.service';
import { CreateUserSigUpDto } from './dto/create-user-sig-up.dto';
import { UpdateUserSigUpDto } from './dto/update-user-sig-up.dto';
import { UserSigUp } from './entities/user-sig-up.entity';

@Controller('user-sig-up')
export class UserSigUpController {
  // eslint-disable-next-line prettier/prettier
  constructor(private readonly userSigUpService: UserSigUpService) { }

  @Post()
  create(@Body() createUserSigUpDto: CreateUserSigUpDto) {
    return this.userSigUpService.create(createUserSigUpDto);
  }

  @Get()
  findAll() {
    return this.userSigUpService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userSigUpService.findOne(id);
  }

  @Get("by/name")
  async findByName(@Body('username') username: string) {
    return await this.userSigUpService.findByName(username);

  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserSigUpDto: UpdateUserSigUpDto,
  ) {
    return this.userSigUpService.update(id, updateUserSigUpDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userSigUpService.remove(id);
  }
}
