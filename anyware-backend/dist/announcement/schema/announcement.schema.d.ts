import { HydratedDocument } from "mongoose";
export type announcementDocument = HydratedDocument<Announcement>;
export declare class Announcement {
    author: string;
    message: string;
}
export declare const announceSchema: import("mongoose").Schema<Announcement, import("mongoose").Model<Announcement, any, any, any, import("mongoose").Document<unknown, any, Announcement, any, {}> & Announcement & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Announcement, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Announcement>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Announcement> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
