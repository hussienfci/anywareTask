import { ApiProperty } from '@nestjs/swagger';
import {IsString , IsNotEmpty, isString} from 'class-validator' ; 
export class CreateAnnouncementDto {

    @IsString()
    @IsNotEmpty() 
    @ApiProperty({ example: "Ahmed ", description: 'announcement_author' })
    author: string ; 
 
    @IsString()
    @IsNotEmpty() 
    @ApiProperty({ example: "Hello dears!", description: 'announcement_message' })
   
    message: string ; 

    
}
