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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnouncementService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const announcement_schema_1 = require("./schema/announcement.schema");
const mongoose_2 = require("mongoose");
let AnnouncementService = class AnnouncementService {
    announceModel;
    constructor(announceModel) {
        this.announceModel = announceModel;
    }
    async createAnnouncement(createAnnouncementDto) {
        const createAnnounce = new this.announceModel(createAnnouncementDto);
        return createAnnounce.save();
    }
    async findAllAnnouncement() {
        return this.announceModel.find().exec();
    }
    async findOneAnnounce(id) {
        const announce = await this.announceModel.findOne({ _id: id });
        if (!announce) {
            return `announcement with id: ${id} not found..!`;
        }
        else {
            return announce;
        }
    }
    async updateAnnounce(id, updateAnnouncementDto) {
        const updatedAnnounce = await this.announceModel.findByIdAndUpdate({ _id: id }, updateAnnouncementDto, { returnOriginal: false }).exec();
        if (!updatedAnnounce) {
            throw new common_1.NotFoundException(`announcement with id:  "${id}" not found.`);
        }
        else {
            return updatedAnnounce;
        }
    }
    async removeAnnounceByID(id) {
        return await this.announceModel.findByIdAndDelete(id);
    }
};
exports.AnnouncementService = AnnouncementService;
exports.AnnouncementService = AnnouncementService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(announcement_schema_1.Announcement.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AnnouncementService);
//# sourceMappingURL=announcement.service.js.map