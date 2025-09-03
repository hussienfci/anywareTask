import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';

@Controller('announcement')
export class AnnouncementController {
  constructor(private readonly announcementService: AnnouncementService) {}

  @Post()
  async createAnnounce(@Body() createAnnouncementDto: CreateAnnouncementDto) {
    return this.announcementService.createAnnouncement(createAnnouncementDto);
  }

  @Get()
  async findAllAnnounce() {
    return this.announcementService.findAllAnnouncement();
  }

  @Get(':id')
  async findOneById(@Param('id') id: string) {
    return this.announcementService.findOneAnnounce(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAnnouncementDto: UpdateAnnouncementDto) {
    return this.announcementService.updateAnnounce(id, updateAnnouncementDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.announcementService.removeAnnounceByID(id);
  }
}
