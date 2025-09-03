import { Module } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { QuizController } from './quiz.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Quiz, quizSchema } from './schema/quiz.schema';

@Module({
imports:[MongooseModule.forFeature([{ name: Quiz.name , schema: quizSchema} ])] , 
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
