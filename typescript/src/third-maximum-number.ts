const nums = [3, 3, 3, 2, 2];
nums.sort((a: number, b: number) => b - a);
let maximumNumber = nums[0];
let countNumbr = 1;
for (let i = 1; i < nums.length; i++) {
  if (nums[i] < nums[i - 1]) countNumbr++;
  if (countNumbr == 3) {
    maximumNumber = nums[i];
    break;
  }
}

console.log(maximumNumber);

export {};
