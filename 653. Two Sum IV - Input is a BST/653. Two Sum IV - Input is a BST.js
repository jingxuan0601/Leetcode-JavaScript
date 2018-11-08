/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */


var findTarget = function(root, k) {
    if(root == null) {
        return false;
    }

    let vals = traverse(root);
    return find(vals, k);
};

var traverse = function(root) {
    if (root == null) {
        return [];
    }

    return [...traverse(root.left), root.val, ...traverse(root.right)];
};

var find = function(vals, k) {
    let left = 0;
    let right = vals.length - 1;
    while (left < right) {
        let sum = vals[left] + vals[right];
        if (sum == k) {
            return true;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }

    return false;
}

