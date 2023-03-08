import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateImageDto } from './upload/createImage.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) { }

  async createImage(
    createImageDto: CreateImageDto,
    files: Express.Multer.File[],
  ) {
    let index = 0;
    const arrOfFiles = [];
    files.forEach(async () => {
      createImageDto.image = files[index].originalname;
      const create: UserDocument = new this.userModel(createImageDto);
      const createdImage = create.save();
      arrOfFiles.push(createdImage);
      index += 1;
    });
    const rearr = [];
    await Promise.allSettled(arrOfFiles).then((res) => {
      res.forEach((r: any) => {
        rearr.push(r.value);
      });
    });
    return rearr;
  }

  findByName(id: string) {
    return this.userModel.findById(id).exec();
  }
}