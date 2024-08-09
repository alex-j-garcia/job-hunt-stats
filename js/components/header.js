"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SiteHeader extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<header>
        <h1>Job Hunt Stats</h1>
        <p>My experience with corporate ghosting & job hunting in the current market</p>
      </header>`;
    }
}
exports.default = SiteHeader;
