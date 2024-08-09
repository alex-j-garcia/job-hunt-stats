import { ConcisePosition } from "../../types/position";
import service from "../service";

class PositionsTable extends HTMLElement {
  tableBody: HTMLTableSectionElement;
  paragraph: HTMLParagraphElement;

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

    this.tableBody = this.querySelector("tbody")!;
    this.paragraph = this.querySelector("[applied-count]")!;
  }

  async connectedCallback() {
    const data = await service.getCurrJobsApplied();
    this.setCount(data.length);
    this.createTableRows(data);
  }

  setCount(count: number) {
    const text = this.paragraph.textContent || "";
    this.paragraph.textContent = text.replace("{count}", count.toString());
  }

  createTableRows(data: ConcisePosition[]) {
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

export default PositionsTable;
