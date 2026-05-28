export function ladderLength(
  beginWord: string,
  endWord: string,
  wordList: string[],
): number {
  const wordListSet = new Set(wordList);
  // This means we do not have a word to match -- edge case
  if (!wordListSet.has(endWord)) return 0;

  const getPatterns = (word: string): string[] => {
    const patterns = [];
    for (let i = 0; i < word.length; i++) {
      const pattern = word.slice(0, i) + "*" + word.slice(i + 1, word.length);
      patterns.push(pattern);
    }
    return patterns;
  };

  const graph: Map<string, string[]> = new Map();

  for (const word of [beginWord, ...wordList]) {
    const patterns = getPatterns(word);
    patterns.forEach((pattern: string) => {
      if (!graph.has(pattern)) graph.set(pattern, []);
      graph.get(pattern)!.push(word);
    });
  }

  // start searching for the shortest path by pattern searching
  const queue: [string, number][] = [[beginWord, 1]];

  const visited: Set<string> = new Set(beginWord);
  while (queue.length) {
    const [currentWord, level] = queue.shift()!;
    if (currentWord === endWord) {
      return level;
    }

    const patterns = getPatterns(currentWord);

    for (const pattern of patterns) {
      const neighwords: string[] = graph.get(pattern) || [];

      for (const neighword of neighwords) {
        if (!visited.has(neighword)) {
          visited.add(neighword);
          queue.push([neighword, level + 1]);
        }
      }
    }
  }
  return 0;
}
