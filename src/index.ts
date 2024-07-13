import { Position } from "../types/position";

import positionsRepository from "./repository";

(async function listPositions() {
  const positions = await positionsRepository.getAllAppliedPositions();
  listApplications(positions, "Jobs I've applied to:");
})();

// Test function
function listApplications(list: Position[], headerText: string) {
  const heading = document.createElement("h1");
  const ol = document.createElement("ol");
  heading.textContent = headerText;
  document.body.appendChild(heading);
  document.body.appendChild(ol);
  const jobs = [...list].map(
    (job) => `${job.company_name}: ${job.position_name}`
  );
  console.log(`Jobs: ${JSON.stringify(jobs)}`);
  jobs.forEach((job) => {
    const li = document.createElement("li");
    li.textContent = job;
    ol.appendChild(li);
  });
  const hr = document.createElement("hr");
  document.body.appendChild(hr);
}
