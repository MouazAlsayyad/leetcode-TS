function groupAnagrams(strs: string[]): string[][] {
  const anagramMap = new Map<string, string[]>();

  for (const str of strs) {
    const count: number[] = Array(26).fill(0);

    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i) - "a".charCodeAt(0);
      count[charCode]++;
    }

    const key = count.join("#");

    if (!anagramMap.has(key)) anagramMap.set(key, [str]);
    else {
      const existingValue = anagramMap.get(key);
      if (existingValue !== undefined) {
        existingValue.push(str);
        anagramMap.set(key, existingValue);
      }
    }
  }

  return Array.from(anagramMap.values());
}
