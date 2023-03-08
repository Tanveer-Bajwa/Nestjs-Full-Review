/* eslint-disable prettier/prettier */
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserMiddleware } from './user/middleware/user.middleware';
import { UserModule } from './user/user.module';
import { UserSigUpModule } from './user-sig-up/user-sig-up.module';
import { UserLogInModule } from './user-log-in/user-log-in.module';
import { AuthModule } from './auth/auth.module';
import { googleAuthModule } from './google-auth/google-auth.module';
import { MediaModule } from './media/media.module';
import { ClientModule } from './modules/client/client.module';
import { ProjectModule } from './modules/project/project.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { TaskModule } from './modules/task/task.module';
import { EmployeeProjectModule } from './modules/employee-project/employee-project.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/newUser'),
    //UserModule,
    // UserSigUpModule,
    // UserLogInModule,
    AuthModule,
    ClientModule,
    ProjectModule,
    EmployeeModule,
    TaskModule,
    EmployeeProjectModule,
    //googleAuthModule,
    //MediaModule
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(UserMiddleware).forRoutes('user');
    console.log('this is classes base middleware fuction');
  }
}
