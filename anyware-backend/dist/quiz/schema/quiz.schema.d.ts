import { HydratedDocument } from "mongoose";
export type announcementDocument = HydratedDocument<Quiz>;
export declare class Quiz {
    questions: string[];
    answers: string[];
}
export declare const quizSchema: import("mongoose").Schema<Quiz, import("mongoose").Model<Quiz, any, any, any, import("mongoose").Document<unknown, any, Quiz, any, {}> & Quiz & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Quiz, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Quiz>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Quiz> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
