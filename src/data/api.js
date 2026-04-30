import { ALL_JOBS } from "./constants";
ok
export const api = {
  getJobs: () => new Promise(res => setTimeout(() => res(ALL_JOBS), 280)),
  getJob: id => new Promise((res, rej) => setTimeout(() => {
    const j = ALL_JOBS.find(j => j.id === id);
    j ? res({ ...j }) : rej(new Error("Not found"));
  }, 180)),
  submitApplication: data => new Promise(res => setTimeout(() =>
    res({ id: Math.random().toString(36).slice(2), ...data, status: "received" }), 700)),
  getApplications: () => new Promise(res => {
    const s = JSON.parse(localStorage.getItem("cb_apps") || "[]");
    setTimeout(() => res(s), 200);
  }),
};
