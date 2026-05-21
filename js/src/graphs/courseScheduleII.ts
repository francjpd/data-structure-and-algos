const VISITED = 2;
const NOT_VISITED = 0;
const VISITNG = 1;

export function findOrder(
  numCourses: number,
  prerequisites: number[][],
): number[] {
  const reqMap: Map<number, number[]> = new Map<number, number[]>();
  const visited = Array(numCourses);
  // init reqMap & visited
  for (let course = 0; course < numCourses; course++) {
    reqMap.set(course, []);
    visited[course] = NOT_VISITED; // not visited
  }

  prerequisites.forEach(([course, dep]) => {
    reqMap.get(course)!.push(dep);
  });

  let result: number[] = [];

  const dfs = (course: number) => {
    if (visited[course] === VISITNG) {
      return false;
    }
    if (visited[course] === VISITED) {
      return true;
    }

    visited[course] = VISITNG;
    const prereqs = reqMap.get(course)!;
    for (const req of prereqs) {
      if (!dfs(req)) {
        return false;
      }
    }
    visited[course] = VISITED;
    result.push(course);
    return true;
  };

  for (let course = 0; course < numCourses; course++) {
    if (!dfs(course)) {
      return [];
    }
  }
  return result;
}

console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
    [3, 0],
  ]),
);
