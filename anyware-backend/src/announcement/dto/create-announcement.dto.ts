import {IsString , IsNotEmpty, isString} from 'class-validator' ; 
export class CreateAnnouncementDto {

    @IsString()
    @IsNotEmpty()
    auother: string ; 
 
    @IsString()
    @IsNotEmpty()
    message: string ; 

    
}
