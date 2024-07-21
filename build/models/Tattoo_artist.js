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
exports.Tattoo_artist = void 0;
const typeorm_1 = require("typeorm");
const Appointment_1 = require("./Appointment");
const Gallery_1 = require("./Gallery");
let Tattoo_artist = class Tattoo_artist extends typeorm_1.BaseEntity {
};
exports.Tattoo_artist = Tattoo_artist;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tattoo_artist.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tattoo_artist.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tattoo_artist.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tattoo_artist.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tattoo_artist.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Tattoo_artist.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Tattoo_artist.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Tattoo_artist.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Tattoo_artist.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Appointment_1.Appointment, (appoiment) => appoiment.tattoo_artist),
    __metadata("design:type", Array)
], Tattoo_artist.prototype, "appoiments", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Gallery_1.Gallery, (gallery) => gallery.tattoo_artist),
    __metadata("design:type", Array)
], Tattoo_artist.prototype, "galleries", void 0);
exports.Tattoo_artist = Tattoo_artist = __decorate([
    (0, typeorm_1.Entity)("tattoo_artists")
], Tattoo_artist);
