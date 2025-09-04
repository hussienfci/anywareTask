import { QuizService } from './quiz.service';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
export declare class QuizController {
    private readonly quizService;
    constructor(quizService: QuizService);
    create(createQuizDto: CreateQuizDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/quiz.schema").Quiz, {}, {}> & import("./schema/quiz.schema").Quiz & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): Promise<import("./schema/quiz.schema").Quiz[]>;
    findOne(id: string): Promise<string | import("./schema/quiz.schema").Quiz>;
    update(id: string, updateQuizDto: UpdateQuizDto): Promise<string | import("./schema/quiz.schema").Quiz | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/quiz.schema").Quiz, {}, {}> & import("./schema/quiz.schema").Quiz & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
