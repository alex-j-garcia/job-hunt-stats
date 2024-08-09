"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("./repository"));
exports.default = {
    async getCurrJobsApplied() {
        const currJobsApplied = await repository_1.default.getJobPosts();
        return currJobsApplied;
    },
};
