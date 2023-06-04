const nums1 = [1, 2, 2, 1];
const nums2 = [2];
const largeNums = nums1.length > nums2.length ? nums1 : nums2;
//console.log(largeNums);
const nums3: number[] = [];

nums1.forEach((v) => {
  if (nums2.includes(v)) {
    nums3.push(v);
    let index = nums2.indexOf(v);
    nums2.splice(index, 1);
  }
});

console.log(nums3);
