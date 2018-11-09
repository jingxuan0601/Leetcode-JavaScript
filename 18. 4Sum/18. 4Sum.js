/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
	nums.sort((a, b) => {return a - b;});
    let ret = [];
    for (let i = 0; i < nums.length - 3; i++) {
    	if (i > 0 && nums[i - 1] == nums[i]) {
    		continue;
    	}

    	for (let j = nums.length - 1; j > 2; j--) {
    		if (j < nums.length - 1 && nums[j + 1] == nums[j]) {
    			continue;
    		}

    		let left = i + 1;
    		let right = j - 1;
    		while (left < right) {
    			if (left > i + 1 && nums[left - 1] == nums[left]) {
    				left++;
    				continue;
    			}

    			if (right < j - 1 && nums[right + 1] == nums[right]) {
    				right--;
    				continue;
    			}

    			let sum = nums[i] + nums[j] + nums[left] + nums[right];
    			if (sum == target) {
    				ret.push([nums[i], nums[left], nums[right], nums[j]]);
    				left++;
    				right--;
    			} else if (sum < target) {
    				left++;
    			} else {
    				right--;
    			}
    		}
    	}
    }

    return ret;
};