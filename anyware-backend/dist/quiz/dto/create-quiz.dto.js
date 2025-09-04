"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQuizDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreateQuizDto {
    questions;
    answers;
}
exports.CreateQuizDto = CreateQuizDto;
__decorate([
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({ example: ["1- what meantby OOP?", "2- What does MVC indecates to?"],
        description: 'quiz_questions',
        type: [String]
    }),
    __metadata("design:type", Array)
], CreateQuizDto.prototype, "questions", void 0);
__decorate([
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsArray)(),
    (0, swagger_1.ApiProperty)({
        example: ["1-  Object Oriented Programming.", "2- Model view controller "],
        description: 'quiz_answer',
        type: [String]
    }),
    __metadata("design:type", Array)
], CreateQuizDto.prototype, "answers", void 0);
//# sourceMappingURL=create-quiz.dto.js.map