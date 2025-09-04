import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz } from './schema/quiz.schema';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';

@Injectable()
export class QuizService {
  constructor(@InjectModel(Quiz.name)
              private QuizModel: Model<Quiz>){}
// The function of the (POST) method
 async createQuiz(createQuizDto: CreateQuizDto) {
    const createQuiz = new this.QuizModel(createQuizDto) ; 
    return createQuiz.save() ;   
  }
  // The function of (GET) method to get all Quiz
  async findAllQuiz():Promise<Quiz[]> {
    return this.QuizModel.find().exec() ; 
  }

  // Function of (GET) method that get specific 
  // Quiz by id
  async findOneQuiz(id: string): Promise<Quiz | string> {
    const quiz =  await this.QuizModel.findOne({_id: id}) ; 
    if(!quiz){
      return `announcement with id: ${id} not found..!`;
    } else{
      return quiz;
    } 
  }

  // Function of (PATCH) that update the schema using
  // id of the Quiz
  async updateQuiz(id: string, updateQuizdto: UpdateQuizDto):Promise<Quiz | string | null > {
    const quiz = await this.QuizModel.findByIdAndUpdate({_id: id }, updateQuizdto, {new : true} );      
    if(!quiz){
      return `quiz with id: ${id} not found..!`;
    } else{
      return quiz;      
    } 
  }
  // function of (DELETE) that delete the schema 
  // using id of the Quiz
  async removeQuizByID(id: string) {
    return await this.QuizModel.findByIdAndDelete(id) ; 
  }
}
