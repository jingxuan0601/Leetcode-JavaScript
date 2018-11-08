Problem: (https://leetcode.com/problems/two-sum/)
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Solution:
Two Sum的两个解法：
1. 用set存下所有的数，space O(n), find n * O(1)
2. 数组sort之后双指针逼近
此题因为要返回index所以用方法1.