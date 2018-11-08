/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	let ret = [];
    nums.sort((a, b) => {
    	return a - b;
    });

    for (let i = 0; i < nums.length - 2; i++) {
    	if (i > 0 && nums[i] == nums[i - 1]) {
    		continue;
    	}

    	let left = i + 1;
    	let right = nums.length - 1;
    	while (left < right) {
    		if (left > i + 1 && nums[left] == nums[left - 1]) {
    			left++;
    			continue;
    		}

    		if (right < nums.length - 1 && nums[right] == nums[right + 1]) {
    			right--;
    			continue;
    		}
    		
    		let sum = nums[i] + nums[left] + nums[right];
    		if (sum == 0) {
    			ret.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
    		} else if (sum < 0) {
    			left++;
    		} else {
    			right--;
    		}
    	}
    }

    return ret;
};