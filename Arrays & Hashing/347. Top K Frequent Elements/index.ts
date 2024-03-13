function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  // Count frequency of each number
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Sort the map entries by frequency in descending order
  const sortedItems = [...map.entries()].sort((a, b) => b[1] - a[1]);

  // Return the first 'k' elements from the sorted entries
  return sortedItems.slice(0, k).map(([num]) => num);
}
