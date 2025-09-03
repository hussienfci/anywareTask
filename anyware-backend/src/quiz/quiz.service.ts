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
 async createQuiz(createAnnouncementDto: CreateQuizDto) {
    const createAnnounce = new this.QuizModel(createAnnouncementDto) ; 
    return createAnnounce.save() ;   
  }
  // The function of (GET) method to get all Quiz
  async findAllQuiz():Promise<Quiz[]> {
    return this.QuizModel.find().exec() ; 
  }

  // Function of (GET) method that get specific 
  // announcement by id
  async findOneQuiz(id: string): Promise<Quiz | string> {
    const announce =  await this.QuizModel.findOne({_id: id}) ; 
    if(!announce){
      return `announcement with id: ${id} not found..!`;
    } else{
      return announce;
    } 
  }

  // Function of (PATCH) that update the schema using
  // id of the announcement
  async updateQuiz(id: string, updateAnnouncementDto: UpdateQuizDto):Promise<Quiz | string | null > {
    const announce =  await this.QuizModel.findOne({_id: id}) ; 
      if(!announce){
      return `announcement with id: ${id} not found..!`;
    } else{
      return await this.QuizModel.findByIdAndUpdate({_id: id }, announce, {new : true} );      
    } 
  }
  // function of (DELETE) that delete the schema 
  // using id of the announcement
  async removeQuizByID(id: string) {
    return await this.QuizModel.findByIdAndDelete(id) ; 
  }
}
