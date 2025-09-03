
import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type announcementDocument = HydratedDocument<Quiz> ; 

@Schema()
export class Quiz {

    @Prop({required:true})

    questions: string[] ; 

    @Prop({required:true})

    answers: string[] ; 
    

}

export const quizSchema = SchemaFactory.createForClass(Quiz) ;  
