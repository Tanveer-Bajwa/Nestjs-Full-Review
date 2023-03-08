import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSigUpDto } from './create-user-sig-up.dto';

export class UpdateUserSigUpDto extends PartialType(CreateUserSigUpDto) {}
