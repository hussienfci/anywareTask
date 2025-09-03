// import { SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type announcementDocument = HydratedDocument<Announcement> ; 

@Schema()
export class Announcement {

    @Prop({required:true})

    auother: string ; 

    @Prop()
    message: string ; 

}

export const announceSchema = SchemaFactory.createForClass(Announcement) ;  
