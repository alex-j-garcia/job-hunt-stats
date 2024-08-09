"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("../service"));
class PositionsTable extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = ` <div>
    <p applied-count>Total applications: {count}</p>
    <table>
      <thead>
        <tr>
          <th scope='col'>Position</th>
          <th scope='col'>Employer</th>
        </tr>
      </thead>
        <tbody></tbody>
      </table></div>`;
        this.tableBody = this.querySelector("tbody");
        this.paragraph = this.querySelector("[applied-count]");
    }
    async connectedCallback() {
        const data = await service_1.default.getCurrJobsApplied();
        this.setCount(data.length);
        this.createTableRows(data);
    }
    setCount(count) {
        const text = this.paragraph.textContent || "";
        this.paragraph.textContent = text.replace("{count}", count.toString());
    }
    createTableRows(data) {
        data.forEach(({ company_name, position_name }) => {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            td1.textContent = position_name;
            const td2 = document.createElement("td");
            td2.textContent = company_name;
            tr.appendChild(td1);
            tr.appendChild(td2);
            this.tableBody?.appendChild(tr);
        });
    }
}
exports.default = PositionsTable;
