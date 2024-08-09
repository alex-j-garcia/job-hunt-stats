import repository from "./repository";

export default {
  async getCurrJobsApplied() {
    const currJobsApplied = await repository.getJobPosts();
    return currJobsApplied;
  },
};
