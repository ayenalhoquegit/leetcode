const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const numsSet = new Set(nums);
const disappearedNums: number[] = [];
for (let i = 1; i <= nums.length; i++) {
  if (!numsSet.has(i)) {
    disappearedNums.push(i);
  }
}

console.log(disappearedNums);

export {};
