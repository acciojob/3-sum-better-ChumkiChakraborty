function threeSum(nums, target) {
  nums.sort((a, b) => a - b); // Sort the array
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // Check if this sum is closer to the target than the closest found so far
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++; // Increase sum by moving left pointer
      } else if (sum > target) {
        right--; // Decrease sum by moving right pointer
      } else {
        // Exact match found
        return sum;
      }
    }
  }

  return closestSum;
}
module.exports = threeSum;
