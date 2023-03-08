/* eslint-disable prettier/prettier */
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";


export class SignUpDto {
    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsString()
    @IsEmail({}, { message: 'please entered correct email' })
    readonly email: string

    @IsNotEmpty()
    @MinLength(6)
    @IsString()
    readonly password: string

}