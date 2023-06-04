const k = 2;
const nums = [1, 2, 3, 1, 2, 3];

function containsDuplicate(numArr: number[], k: number): boolean {
  let windowSet = new Set();
  for (let i = 0; i < numArr.length; i++) {
    if (windowSet.has(numArr[i])) {
      return true;
    }
    windowSet.add(numArr[i]);
    if (windowSet.size > k) windowSet.delete(numArr[i - k]);
  }
  return false;
}
const isContainsDuplicate: boolean = containsDuplicate(nums, k);
console.log(isContainsDuplicate);
