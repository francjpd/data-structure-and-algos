export function findOrder(
  numCourses: number,
  prerequisites: number[][],
): number[] {
  const inDegree = new Array(numCourses).fill(0);
  const deps = prerequisites;
  const graph: Record<number, number[]> = {};

  for (let course = 0; course < numCourses; course++) {
    graph[course] = [];
  }

  for (const [dep, course] of deps) {
    graph[course].push(dep);
    inDegree[dep]++;
  }

  const out = [];
  const queue: number[] = [];
  inDegree.forEach((value: number, index: number) => {
    if (value === 0) {
      queue.push(index);
    }
  });

  console.log("graph", graph);
  console.log("inDegree", inDegree);
  console.log("queue", queue);

  while (queue.length) {
    const course = queue.shift()!;
    out.push(course);
    const courseDeps = graph[course];

    for (const courseDep of courseDeps) {
      inDegree[courseDep]--;
      if (inDegree[courseDep] === 0) {
        queue.push(courseDep);
      }
    }
  }
  return out;
}

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
);
