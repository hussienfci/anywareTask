import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { Announcement } from './schema/announcement.schema';
import { Model } from 'mongoose';
export declare class AnnouncementService {
    private announceModel;
    constructor(announceModel: Model<Announcement>);
    createAnnouncement(createAnnouncementDto: CreateAnnouncementDto): Promise<import("mongoose").Document<unknown, {}, Announcement, {}, {}> & Announcement & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAllAnnouncement(): Promise<Announcement[]>;
    findOneAnnounce(id: string): Promise<Announcement | string>;
    updateAnnounce(id: string, updateAnnouncementDto: UpdateAnnouncementDto): Promise<Announcement | string | null>;
    removeAnnounceByID(id: string): Promise<(import("mongoose").Document<unknown, {}, Announcement, {}, {}> & Announcement & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
