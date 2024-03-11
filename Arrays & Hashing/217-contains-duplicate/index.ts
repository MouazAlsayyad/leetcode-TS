function containsDuplicate(nums: number[]): boolean {
  let directions = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (directions.has(nums[i])) return true;
    else directions.add(nums[i]);
  }
  return false;
}
