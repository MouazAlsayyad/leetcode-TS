function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const countMapS = new Map<string, number>();
  const countMapT = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    countMapS.set(charS, (countMapS.get(charS) || 0) + 1);
    countMapT.set(charT, (countMapT.get(charT) || 0) + 1);
  }

  // Check if both maps have the same keys with the same counts
  for (const [char, count] of countMapS)
    if (countMapT.get(char) !== count) return false;

  return true;
}
