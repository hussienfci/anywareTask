import { Module } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { AnnouncementController } from './announcement.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Announcement, announceSchema } from './schema/announcement.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Announcement.name , schema: announceSchema} ])] , 
  controllers: [AnnouncementController],
  providers: [AnnouncementService],
})
export class AnnouncementModule {}
