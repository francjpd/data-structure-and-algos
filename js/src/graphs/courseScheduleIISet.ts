/**
 * I like this more as it uses sets under the hood which is the best way to go
 * */
export function findOrderSet(
  numCourses: number,
  prerequisites: number[][],
): number[] {
  const visiting: Set<number> = new Set<number>();
  const visited: Set<number> = new Set<number>();

  const reqMap: Map<number, number[]> = new Map();

  // init reqMap
  for (let crs = 0; crs < numCourses; crs++) {
    reqMap.set(crs, []);
  }

  for (const [crs, req] of prerequisites) {
    reqMap.get(crs)!.push(req);
  }

  console.log(reqMap);
  const out: number[] = [];

  const dfs = (crs: number) => {
    console.log(crs);
    if (visited.has(crs)) {
      return true;
    }

    //cycle detected
    if (visiting.has(crs)) {
      return false;
    }

    visiting.add(crs);

    console.log(crs);
    for (const req of reqMap.get(crs)!) {
      console.log(req);
      if (!dfs(req)) {
        return false;
      }
    }
    console.log("adding");
    out.push(crs);
    visited.add(crs);
    visiting.delete(crs);
    return true;
  };

  for (let crs = 0; crs < numCourses; crs++) {
    if (!dfs(crs)) {
      return [];
    }
  }

  return out;
}

console.log(
  findOrderSet(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ]),
);
