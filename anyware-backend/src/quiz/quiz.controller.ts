import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Post('/NewQuiz')
  async create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizService.createQuiz(createQuizDto);
  }

  @Get('quizzes')
  async findAll() {
    return this.quizService.findAllQuiz();
  }

  @Get('/quiz/:id')
  async findOne(@Param('id') id: string) {
    return this.quizService.findOneQuiz(id);
  }

  @Patch('/updateQuiz/:id')
  async update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizService.updateQuiz(id, updateQuizDto);
  }

  @Delete('/deleteQuiz/:id')
  async remove(@Param('id') id: string) {
    return this.quizService.removeQuizByID(id);
  }
}
