
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
export const findDuplicates = (nums: number[]) => {
    // This could also be a Map
    const numbers: NumberObject = {}
    return nums.reduce((result: number[], num: number) => {
        if (!numbers[num]) {
            numbers[num] = num;
            return result
        }
        result.push(num)
        return result;
    }, [])

}