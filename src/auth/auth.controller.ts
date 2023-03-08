/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateUserLogInDto } from "src/user-log-in/dto/create-user-log-in.dto";
import { AuthService } from "./auth.service";
import { LogInDto } from "./dto/logIn.dto";
import { SignUpDto } from "./dto/signUp.dto";

@Controller('user-login')
export class AuthController {
    constructor(private authService: AuthService) { }


    @Post('signup')
    signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
        return this.authService.signUp(signUpDto)
    }

    @Get('login')
    logIn(@Body() logInDto: LogInDto): Promise<{ token: string }> {
        return this.authService.login(logInDto)
    }

}


