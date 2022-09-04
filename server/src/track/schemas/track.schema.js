"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TrackSchema = exports.Track = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var bson_1 = require("bson");
var Track = /** @class */ (function () {
    function Track() {
    }
    __decorate([
        (0, mongoose_1.Prop)()
    ], Track.prototype, "name");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Track.prototype, "astist");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Track.prototype, "track");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Track.prototype, "listens");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Track.prototype, "picture");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Track.prototype, "audio");
    __decorate([
        (0, mongoose_1.Prop)({ type: [{ type: bson_1.ObjectId, ref: 'Comment' }] })
    ], Track.prototype, "comments");
    Track = __decorate([
        (0, mongoose_1.Schema)()
    ], Track);
    return Track;
}());
exports.Track = Track;
exports.TrackSchema = mongoose_1.SchemaFactory.createForClass(Track);
