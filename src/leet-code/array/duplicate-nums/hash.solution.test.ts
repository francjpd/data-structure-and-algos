import { describe, expect, test } from "vitest";
import { findDuplicates } from "./hash-solution";
import { findDuplicatesAbs } from "./abs-solution";

const testCases = [
    [[4, 3, 2, 8, 2, 3, 1], [2, 3]],
    [[4, 3, 2, 1], []],
    [[1, 1, 2, 2], [1, 2]]
];

describe('array - duplicate-nums - hash solution', () => {
    test.each(testCases)('findDuplicates(%j) -> %j', (input: number[], expected: number[]) => {
        expect(findDuplicates(input)).toEqual(expected)
    })
})

describe('array - duplicate-nums - abs solution', () => {
    test.each(testCases)('findDuplicates(%j) -> %j', (input: number[], expected: number[]) => {
        expect(findDuplicatesAbs(input)).toEqual(expected)
    })
})