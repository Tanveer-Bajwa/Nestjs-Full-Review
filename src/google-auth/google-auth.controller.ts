/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleAuthService } from './google-auth.service';

@Controller('google')
export class GoogleAuthController {
    constructor(private readonly googleAuthService: GoogleAuthService) { }

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) { }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        return this.googleAuthService.googleLogin(req);
    }
}
