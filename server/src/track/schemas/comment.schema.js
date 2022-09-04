"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CommentSchema = exports.Comment = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose = require("mongoose");
var Comment = /** @class */ (function () {
    function Comment() {
    }
    __decorate([
        (0, mongoose_1.Prop)()
    ], Comment.prototype, "username");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Comment.prototype, "text");
    __decorate([
        (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Track' })
    ], Comment.prototype, "track");
    Comment = __decorate([
        (0, mongoose_1.Schema)()
    ], Comment);
    return Comment;
}());
exports.Comment = Comment;
exports.CommentSchema = mongoose_1.SchemaFactory.createForClass(Comment);
