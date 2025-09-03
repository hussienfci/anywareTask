import { Injectable } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Announcement } from './schema/announcement.schema';
import { Model } from 'mongoose';

@Injectable()
export class AnnouncementService {
  constructor(@InjectModel(Announcement.name)
              private announceModel: Model<Announcement>){}
// The function of the (POST) method
 async createAnnouncement(createAnnouncementDto: CreateAnnouncementDto) {
    const createAnnounce = new this.announceModel(createAnnouncementDto) ; 
    return createAnnounce.save() ;   
  }
  // The function of (GET) method to get all announcements
  async findAllAnnouncement():Promise<Announcement[]> {
    return this.announceModel.find().exec() ; 
  }

  // Function of (GET) method that get specific 
  // announcement by id
  async findOneAnnounce(id: string): Promise<Announcement | string> {
    const announce =  await this.announceModel.findOne({_id: id}) ; 
    if(!announce){
      return `announcement with id: ${id} not found..!`;
    } else{
      return announce;
    } 
  }

  // Function of (PATCH) that update the schema using
  // id of the announcement
  async updateAnnounce(id: string, updateAnnouncementDto: UpdateAnnouncementDto):Promise<Announcement | string | null > {
    const announce =  await this.announceModel.findOne({_id: id}) ; 
      if(!announce){
      return `announcement with id: ${id} not found..!`;
    } else{
      return await this.announceModel.findByIdAndUpdate({_id: id }, announce, {new : true} );      
    } 
  }
  // function of (DELETE) that delete the schema 
  // using id of the announcement
  async removeAnnounceByID(id: string) {
    return await this.announceModel.findByIdAndDelete(id) ; 
  }
}
