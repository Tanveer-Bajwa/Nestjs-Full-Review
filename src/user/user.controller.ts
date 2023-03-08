import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { CreateImageDto } from './upload/createImage.dto';
import { diskStorage } from 'multer';
import { RolesGuard } from 'src/auth-guard/auth-guard.guard';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('file', 100, {
      storage: diskStorage({
        destination: './upload',
        filename: (req, file, cb) => {
          const fileName: string = file.originalname;
          cb(null, `${fileName}`);
        },
      }),
    }),
  )
  async createImage(
    @Body() createItemDto: CreateImageDto,
    @UploadedFiles() files: Array<Express.Multer.File>,
  ) {
    const Image = await this.userService.createImage(createItemDto, files);
    //console.log({ Image, files });
    //return { Image, files };
    return Image;
  }
  @Get(':id')
  GetUser(@Param('id') id: string) {
    return this.userService.findByName(id);
  }

  // @Post('upload')
  // @UseInterceptors(FilesInterceptor('files'))
  // uploadFile(@UploadedFiles() files: Array<Express.Multer.File>) {
  //   console.log(files);
  //   if (files.length > 1)
  //     return {
  //       message: `${files.length} are files uplaoded`,
  //       data: files,
  //     };
  //   return {
  //     message: 'Single File is uploaded',
  //   };
  // }
}
