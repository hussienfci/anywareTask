import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { AnnouncementModule } from './announcement/announcement.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL as string ),
    QuizModule, 
    AnnouncementModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}