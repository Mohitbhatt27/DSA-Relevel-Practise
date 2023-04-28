let mp;
var findTarget = function (root, k) {
  mp = {};
  return f(root, k);
};

function f(root, k) {
  if (!root) return false;
  let complement = k - root.val;
  if (mp[complement]) return true;
  if (!mp[root.val]) {
    mp[root.val] = 1;
  } else {
    mp[root.val]++;
  }
  return f(root.left, k) || f(root.right, k);
}
