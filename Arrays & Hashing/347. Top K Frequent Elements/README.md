
1. We define a function named `topKFrequent` that takes an array of numbers `nums` and a number `k`, indicating the number of most frequent elements to return.

2. We create a `Map` named `map` to store the frequency of each number in the input array.

3. We iterate through each number in the `nums` array using a `for...of` loop.

4. Within the loop, we check if the current number already exists in the map. If it does, we increment its count by 1; otherwise, we set its count to 1.

5. After counting the frequency of each number, we convert the map entries into an array of `[key, value]` pairs using the `entries()` method of `Map`.

6. We sort the array of `[key, value]` pairs based on the frequency (the value in the pairs) in descending order using the `sort()` method.

7. We extract the first `k` most frequent numbers from the sorted array by taking the first `k` elements using the `slice()` method. Then, we use the `map()` method to extract only the numbers (keys) from the `[key, value]` pairs.

8. Finally, we return the array containing the `k` most frequent numbers.

# 347. Top K Frequent Elements
https://leetcode.com/problems/top-k-frequent-elements/