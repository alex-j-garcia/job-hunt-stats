"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const header_1 = __importDefault(require("./components/header"));
const positionsTable_1 = __importDefault(require("./components/positionsTable"));
// import { addPosition } from "./repository";
customElements.define("site-header", header_1.default);
customElements.define("positions-table", positionsTable_1.default);
