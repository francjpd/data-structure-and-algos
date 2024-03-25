
type NumberObject = { [key: string]: number };

/**
 * Dificulty: Medium
 * 
 * Given an integer array nums of length n where all the integers of nums are in the range [1, n] 
 * and each integer appears once or twice, return an array of all the integers that appears twice.
 * You must write an algorithm that runs in O(n) time and uses only constant extra space.
 * @param nums 
 * @returns 
 */
export const findDuplicatesAbs = (nums: number[]) => {
    const result: number[] = [];
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1
        if (nums[index] < 0) {
            result.push(index+1) 
            continue
        }
        nums[index] = nums[index] * -1
    }
    return result
}