/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
	nums.sort((a, b) => {return a - b;});
    let min = Number.MAX_VALUE;
    let sum = 0;
    nums.forEach((num, index) => {
    	let left = index + 1;
    	let right = nums.length - 1;
    	while (left < right) {
    		let curSum = num + nums[left] + nums[right];
    		if (Math.abs(curSum - target) < min) {
    			min = Math.abs(curSum - target);
    			sum = curSum;
    		}

    		if (curSum < target) {
    			left++;
    		} else if (curSum > target) {
    			right--;
    		} else {
    			return;
    		}
    	}
    });

    return sum;
};