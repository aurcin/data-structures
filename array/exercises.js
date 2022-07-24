/* 
1. 
Given an array of integers nums and an integer target, 
    return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
    and you may not use the same element twice.
 You can return the answer in any order. 
 */

// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

var twoSum = function (nums, target) {
  const table = {}

  const { length } = nums
  for (let i = 0; i < length; i += 1) {
    let currentNumber = nums[i]
    let numberToLookFor = target - currentNumber

    if (table[numberToLookFor] != undefined) {
      return [table[numberToLookFor], i]
    } else {
      table[currentNumber] = i
    }
  }
}

// 2.
// Given an integer array nums,
// find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.
// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23

// Constraints:

// 1 <= nums.length <= 105
// -104 <= nums[i] <= 104

var maxSubArray = function (nums) {
  let maxSum = Number.NEGATIVE_INFINITY
  let currentSum = 0

  let { length } = nums
  for (let i = 0; i < length; i += 1) {
    currentSum += nums[i]
    if (currentSum > maxSum) {
      maxSum = currentSum
    }

    if (currentSum < 0) {
      currentSum = 0
    }
  }

  return maxSum
}

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

// 3.
// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

var moveZeroes = function (nums) {
  let nextAvailablePosition = 0

  const { length } = nums
  for (let i = 0; i < length; i += 1) {
    if (nums[i]) {
      nums[nextAvailablePosition] = nums[i]
      nextAvailablePosition += 1
    }
  }

  for (let i = nextAvailablePosition; i < length; i += 1) {
    nums[i] = 0
  }

  return nums
}

// console.log(moveZeroes([0, 1, 0, 3, 12]))

// 4.
// Given an integer array nums,
// return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

var containsDuplicate = function (nums) {
  return nums.length !== new Set([...nums]).size
}

// 5.
// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation:
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

// Constraints:

// 1 <= nums.length <= 105
// -231 <= nums[i] <= 231 - 1
// 0 <= k <= 105

// Follow up:

// Try to come up with as many solutions as you can. There are at least three different ways to solve this problem.
// Could you do it in-place with O(1) extra space?

var rotate = function (nums, k) {
  let rotations = k % nums.length
  nums.unshift(...nums.splice(-rotations))
  return nums
}

console.log(rotate([1, 2], 3))
