/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auth, AuthDocument } from './schemas/auth.schema';
import * as bcrypt from 'bcryptjs'
import { SignUpDto } from './dto/signUp.dto';
import { LogInDto } from './dto/logIn.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectModel(Auth.name)
        private readonly authModel: Model<Auth>,
        private readonly jwtService: JwtService,

    ) { }

    async signUp(signUpDto: SignUpDto): Promise<{ token: string }> {
        const { name, email, password } = signUpDto

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await new this.authModel({
            name,
            email,
            password: hashedPassword
        }).save();
        const token = this.jwtService.sign({ id: user.password })
        return { token }
    }

    async login(logInDto: LogInDto): Promise<{ token: string }> {
        const { email, password } = logInDto;

        const user = await this.authModel.findOne({ email })

        if (!user) {
            throw new UnauthorizedException('Invalid email or password')
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password)

        if (!isPasswordMatch) {
            throw new UnauthorizedException('Invalid email or password')
        }
        const token = this.jwtService.sign({ id: user._id })
        return { token }
    }

}