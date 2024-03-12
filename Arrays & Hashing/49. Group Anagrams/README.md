- The function `groupAnagrams` takes an array of strings as input and returns a 2D array where each inner array contains strings that are anagrams of each other.
- It initializes an empty `Map` called `anagramMap` to store anagrams grouped by a unique key.
- It iterates over each string in the input array.
- For each string, it initializes an array called `count` with 26 elements, representing the frequency of each character in the string.
- It iterates over each character in the current string, incrementing the corresponding count in the `count` array.
- After counting the characters' frequencies, it joins the elements of the `count` array into a string using '#' as a separator. This creates a unique key representing the character frequencies in the string.
- If the key doesn't exist in the `anagramMap`, it sets the key in the map with an array containing only the current string.
- If the key already exists in the map, it retrieves the existing array of strings corresponding to that key. Then, it adds the current string to this array and sets the updated array back to the map.
- After processing all strings, it returns an array containing all the arrays of anagrams stored in the `anagramMap`.


# 49. Group Anagrams
https://leetcode.com/problems/group-anagrams/