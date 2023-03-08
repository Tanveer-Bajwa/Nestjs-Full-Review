/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class LogInDto {

    @IsString()
    @IsEmail({}, { message: 'please entered correct email' })
    readonly email: string

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string

}