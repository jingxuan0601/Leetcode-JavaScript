/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
var twoSum = function(nums, target) {
    let indices = [-1, -1];
    if (nums == null || nums.length == 0) {
        return indices;
    }

    let map = new Map();
    nums.forEach((num, index) =>
        {
            if (map.has(target - num)) {
                indices = [map.get(target - num), index];
            } 

            map.set(num, index);
        });

    return indices;
};