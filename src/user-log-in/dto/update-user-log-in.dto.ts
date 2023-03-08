import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLogInDto } from './create-user-log-in.dto';

export class UpdateUserLogInDto extends PartialType(CreateUserLogInDto) {}
