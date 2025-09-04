import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { AnnouncementModule } from './announcement/announcement.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    
    ConfigModule.forRoot({isGlobal:true} ) , 
    MongooseModule.forRoot(
      process.env.MONGO_URI as string 
    ),
    QuizModule, 
    AnnouncementModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}