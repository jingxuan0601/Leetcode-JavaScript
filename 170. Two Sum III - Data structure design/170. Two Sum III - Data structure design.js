/**
 * Initialize your data structure here.
 */
var TwoSum = function() {
    map = new Map();
};

let map;

/**
 * Add the number to an internal data structure.. 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    if (map.has(number)) {
    	map.set(number, map.get(number) + 1);
    } else {
    	map.set(number, 1);
    }
};

/**
 * Find if there exists any pair of numbers which sum is equal to the value. 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (let key of map.keys()) {
    	if (map.has(value - key) && (value - key != key || map.get(key) > 1)) {
    		return true;
    	}
    }

    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = Object.create(TwoSum).createNew()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */