const numsArr = [3, 0, 1];

function missingNumber(nums: number[]): number {
  let numsArray: boolean[] = [];
  for (let i = 0; i < nums.length; i++) {
    numsArray[nums[i]] = true;
  }
  for (let i = 0; i <= nums.length + 1; i++) {
    if (!numsArray[i]) return i;
  }
  //   let numSet = new Set();
  //   nums.forEach((element) => {
  //     numSet.add(element);
  //   });
  //   for (let i = 0; i <= nums.length; i++) {
  //     if (!numSet.has(i)) return i;
  //   }
  return 0;
}

const misNumber = missingNumber(numsArr);
console.log(misNumber);
