function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const visited: number[] = [];
  const map: Map<number, number[]> = new Map();

  for (let i = 0; i < numCourses; i++) {
    map.set(i, []);
    visited[i] = 0;
  }

  prerequisites.forEach(([course, prereq]) => {
    map.get(course)!.push(prereq);
  });

  const dfs = (course: number) => {
    if (visited[course] === 1) {
      return false;
    }
    if (visited[course] === 2) {
      return true;
    }

    visited[course] = 1;

    const prereqs = map.get(course)!;
    for (const prereq of prereqs) {
      const result = dfs(prereq);
      if (!result) {
        return false;
      }
    }

    visited[course] = 2;
    return true;
  };

  for (let i = 0; i < numCourses; i++) {
    const result = dfs(i);
    if (!result) {
      return false;
    }
  }
  return true;
}

const test = [
  [1, 2],
  [1, 3],
  [1, 4],
  [3, 4],
];
console.log(canFinish(7, test));

const testb = [
  [1, 2],
  [1, 3],
  [1, 4],
  [3, 4],
  [3, 1],
];
console.log(canFinish(7, testb));
const testa = [
  [1, 0],
  [0, 1],
];
console.log(canFinish(2, testa));
