"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("./repository"));
(async function listPositions() {
    const positions = await repository_1.default.getAllAppliedPositions();
    listApplications(positions, "Jobs I've applied to:");
})();
// Test function
function listApplications(list, headerText) {
    const heading = document.createElement("h1");
    const ol = document.createElement("ol");
    heading.textContent = headerText;
    document.body.appendChild(heading);
    document.body.appendChild(ol);
    const jobs = [...list].map((job) => `${job.company_name}: ${job.position_name}`);
    console.log(`Jobs: ${JSON.stringify(jobs)}`);
    jobs.forEach((job) => {
        const li = document.createElement("li");
        li.textContent = job;
        ol.appendChild(li);
    });
    const hr = document.createElement("hr");
    document.body.appendChild(hr);
}
