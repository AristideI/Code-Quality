function roundRobin(jobs, slice, index) {
  let counter = 0;
  while (jobs[index] > 0) {
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i] > 0) {
        if (jobs[i] > slice) {
          counter += slice;
          jobs[i] -= slice;
        } else {
          counter += jobs[i];
          jobs[i] = 0;
        }
      }
      if (jobs[index] === 0) {
        return counter;
      }
    }
  }
  return counter;
}
