import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {


    @IsString({each:true})
    @IsNotEmpty()
    @IsArray()
    @ApiProperty({ example: ["1- what meantby OOP?" , "2- What does MVC indecates to?"],
         description: 'quiz_questions',
        type:[String]
     })
    questions: string[] ; 
 
    @IsString({each:true})
    @IsNotEmpty()
    @IsArray()
    @ApiProperty({
         example: ["1-  Object Oriented Programming." , "2- Model view controller "],
          description: 'quiz_answer', 
           type:[String]
     })
    answers: string[] ; 


}
