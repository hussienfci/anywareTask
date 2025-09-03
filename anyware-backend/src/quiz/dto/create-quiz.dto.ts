import { IsArray, IsNotEmpty, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuizDto {


    @IsString()
    @IsNotEmpty()
    @IsArray()
    @ApiProperty({ example: "1- what meantby OOP? \n 2- What does MVC indecates to? ", description: 'quiz_questions' })
    questions: string[] ; 
 
    @IsString()
    @IsNotEmpty()
    @IsArray()
    answers: string[] ; 


}
