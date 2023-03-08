/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { UnauthorizedException } from "@nestjs/common/exceptions";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Auth } from "./schemas/auth.schema";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(

        @InjectModel(Auth.name) private readonly userModel: Model<Auth>
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET
        })
    }
    async validation(payload) {
        const { id } = payload;
        const user = await this.userModel.findById(id);
        if (!user) {
            throw new UnauthorizedException('Login first to access this endpoind.')
        }
        return user;

    }

}