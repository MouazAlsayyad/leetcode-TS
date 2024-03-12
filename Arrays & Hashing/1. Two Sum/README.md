Here's a breakdown of the `twoSum` function:

- It takes in an array of numbers `nums` and a target number `target`.
- It initializes a new `Map` called `prevMap` to store the values and their corresponding indices encountered during the iteration.
- It iterates over each element in the `nums` array.
- For each element, it calculates the difference between the target and the current element.
- It checks if the `prevMap` already contains a key equal to the difference calculated. If it does, it means that the current element, combined with a previous element in the array, sums up to the target. So it returns the indices of both elements.
- If no such pair is found during the iteration, it adds the current element and its index to the `prevMap`.
- If the loop completes without finding a solution, it returns an empty array, indicating that there are no two numbers in the array that sum up to the target.

This function efficiently solves the Two Sum problem in linear time complexity, making use of a hash map to store previously encountered values and their indices.


# 1. Two Sum
https://leetcode.com/problems/two-sum/