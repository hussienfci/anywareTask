import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forRoot(process.env.DB_URL as string)] , 
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
