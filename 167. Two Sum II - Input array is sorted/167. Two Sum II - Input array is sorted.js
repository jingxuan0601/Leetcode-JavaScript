/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
    if (numbers == null || numbers.length == 0) {
    	return [0, 0];
    }

    let left = 0;
    let right = numbers.length;
    while (left < right) {
    	var sum = numbers[left] + numbers[right];
    	if (sum == target) {
    		return [left + 1, right + 1];
    	} else if (sum < target) {
    		left++;
    	} else {
    		right--;
    	}
    }

    return [0, 0];
};