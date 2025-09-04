import { Model } from 'mongoose';
import { Quiz } from './schema/quiz.schema';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
export declare class QuizService {
    private QuizModel;
    constructor(QuizModel: Model<Quiz>);
    createQuiz(createQuizDto: CreateQuizDto): Promise<import("mongoose").Document<unknown, {}, Quiz, {}, {}> & Quiz & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAllQuiz(): Promise<Quiz[]>;
    findOneQuiz(id: string): Promise<Quiz | string>;
    updateQuiz(id: string, updateQuizdto: UpdateQuizDto): Promise<Quiz | string | null>;
    removeQuizByID(id: string): Promise<(import("mongoose").Document<unknown, {}, Quiz, {}, {}> & Quiz & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
