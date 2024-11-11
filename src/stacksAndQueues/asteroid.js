/**

Example 1:

Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
Example 2:

Input: asteroids = [8,-8]
Output: []
Explanation: The 8 and -8 collide exploding each other.
Example 3:

Input: asteroids = [10,2,-5]
Output: [10]
Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

 */
const asteroidCollisions = (asteroids) => {
  const asteroidsMonoStack = [];

  let isAsteroidDestroyed = false;
  for (let asteroid of asteroids) {
    while (
      !isAsteroidDestroyed &&
      asteroidsMonoStack.length &&
      asteroid < 0 &&
      asteroidsMonoStack.at(-1) > 0
    ) {
      if (Math.abs(asteroid) === asteroidsMonoStack.at(-1)) {
        asteroidsMonoStack.pop();
        isAsteroidDestroyed = true;
      } else if (Math.abs(asteroid) > asteroidsMonoStack.at(-1)) {
        asteroidsMonoStack.pop();
      } else {
        isAsteroidDestroyed = true;
      }
    }
    if (!isAsteroidDestroyed) asteroidsMonoStack.push(asteroid);
    isAsteroidDestroyed = false;
  }
  return asteroidsMonoStack;
};

console.log(asteroidCollisions([5, 10, -5]));
console.log(asteroidCollisions([8, -8]));
console.log(asteroidCollisions([10, 2, -5]));
console.log(asteroidCollisions([-2, -1, 1, 2]));
