function twoSum(nums: number[], target: number): number[] {
  const prevMap = new Map<number, number>(); // val index
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (prevMap.has(diff)) return [prevMap.get(diff), i];
    prevMap.set(nums[i], i);
  }
  return [];
}
