import { AnnouncementService } from './announcement.service';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
export declare class AnnouncementController {
    private readonly announcementService;
    constructor(announcementService: AnnouncementService);
    createAnnounce(createAnnouncementDto: CreateAnnouncementDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/announcement.schema").Announcement, {}, {}> & import("./schema/announcement.schema").Announcement & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAllAnnounce(): Promise<import("./schema/announcement.schema").Announcement[]>;
    findOneById(id: string): Promise<string | import("./schema/announcement.schema").Announcement>;
    update(id: string, updateAnnouncementDto: UpdateAnnouncementDto): Promise<string | import("./schema/announcement.schema").Announcement | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/announcement.schema").Announcement, {}, {}> & import("./schema/announcement.schema").Announcement & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
